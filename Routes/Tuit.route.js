const router=require("express").Router()
const Tuitorial=require("../model/Tuitorial.model")
router.post("/puttuit",(req,res)=>{
    const tuitlink=req.body.tuitlink
    const channelName=req.body.channelName
    const topic=req.body.topic
    const channelDescription=' '
    const NewTuit=new TuTuitorial(tuitlink, channelName, topic, channelDescription)
    newTuit.save()
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(500)
    })
})
router.put("/putdescript",(req,res)=>{
    Tuitorial.findById(req.body.id)
    .then(tuits=>{
        tuits.channelDescription=req.body.channelDescription
        tuit.save()
        .then(result=>{
            res.status(200).send(result)
        })
        .catch(err=>{res.status(500).send('Error: ' + err.message)})
    })
})

router.get("/gettuit",(req,res)=>{
    Tuitorial.find()
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(500).send('Error:'+err.message)
    })
})