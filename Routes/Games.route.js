const router = require('express').Router()
const Game= require("../model/GameScript")
router.post("/addgamedet",(req,res)=>{
    let sampleFile
    let uploadPath
    var imgArray=[]
    const script=req.body.script
    for(var i=0;i<3;i++){
        sampleFile = req.files.pic[i];
        uploadPath = __dirname +'../Data/' + sampleFile.name
        imgArray.push(uploadPath)
    }
    const description = req.body.description
    const name= req.body.name
    const gameLink= req.body.gameLink
    const NewGame=new Game(script,imgArray,description,name,gameLink)
    NewGame.save()
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(500).send('Error'+err)
    })
})
router.get('/getgamedata',(req,res)=>{
    Game.find()
    .then(gameData=>{
        res.status(200).send(gameData)
    })
    .catch(err=>{
        res.status(500).send('Error'+err)
    })
})
module.exports=router;