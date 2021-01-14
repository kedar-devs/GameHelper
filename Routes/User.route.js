const router=require('express').Router()
const bcrypt=require('bcrypt')
const saltRound=8
const jwt=require('jsonwebtoken')
const User=require('../model/User.model')
router.post("/addUser",(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err) throw err
        if(user){
            res.status(401).send('User Already Exist')
        }
        else{
            const email=req.body.email
            const username=req.body.username
    
         bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            const password=hash
            const NewUser=new User(email,username,password)
            NewUser.save((err,user) => {
                if(err) {
                    res.status(400).send(err.message)
                }
                else{
                    let payload={subject:user.email}
                    let token=jwt.sign(payload,process.env.SECRET_KEY)
                    res.status(200).send({token})
                }
            })
        })
    }
    })        
})
router.post("/loginUser",(req,res)=>{
    User.findOne({email:req.body.email})
    .then(user=>{
        bcrypt.compare(req.body.password, hash, function(err, result) {
            if(err){
                console.log(err)
                res.status(500).send("Internal Server Error")
            }
            if(result==true){
                let payload={subject:user._id}
                    let token=jwt.sign(payload,process.env.SECRET_KEY)
                    res.status(200).send({token})
            }
            else{
                res.status(401).send('invalid Password')
            }
        });
    })
})
