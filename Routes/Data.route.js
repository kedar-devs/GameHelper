const router=require('express').Router()
const Data=require('../model/Data.model')
router.post('/putdata',(req,res)=>{
    let sampleFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname +'../Data/' + sampleFile.name
    const datatype=req.body.datatype
    const data=uploadPath
    const username=req.body.username
    const status=false;
    const emailid=req.body.email
    const NewData=new Data(datatype,data,username,status,emailid)
    NewData.save()
    .then(result=>{
        res.status(200).send('Data added successfully')
    })
    .catch(err=>{
        res.status(500).send('Error'+err.message)
    })
})
router.get('/getdata',(req,res)=>{
    Data.find()
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send('Error'+err)
    })
})

module.exports=router;