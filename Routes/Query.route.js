const router=require('express').Router()
const Query=require('./../model/Query.model')
router.post('/generateQuery',(req,res)=>{
    const question=req.body.question
    /*const solution={
        answer=' ',
        username:' ',
    }*/
    const username=req.body.username
    const upv=0
    const dowv=0
    const tot=0

    const newQuery=new Query(question,username,upv,dowv,tot)
    newQuery.save()
    .then(result=>{
        res.status(201).send(result)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
})
router.post('/putAnswer',(req,res)=>{
    Query.findOneAndUpdate({_id:req.body.id},{$push:{"answers":{
        "answer": req.body.answer,
        "username":req.body.username,
        "upvote":0,
        "downvote":0,
        "totalVote":0
    }}})
    .then(result=>{
        res.status(200).send("Answer was Added Successfully")
    })
    .catch(err=>{
        res.status(400).send(err)
    })
})
router.post('/putQuesupVote',(req,res)=>{
    Query.findById(req.body.id)
    .then(qeury=>{
        query.upvote+=1
        query.totalVotes+=1
        query.save()
        .then(result=>{
            res.status(201).send('Upvoted sucess')
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })
})
router.post('/putQuesdownVote',(req,res)=>{
    Query.findById(req.body.id)
    .then(qeury=>{
        query.downvotes-=1
        query.totalVotes-=1
        query.save()
        .then(result=>{
            res.status(201).send('Downvoted sucess')
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })
})
router.post('/putAnswerUpvote',(req,res)=>{
    Query.findOneAndUpdate({'answers._id':req.body.ansid},{$push:{
        "answers.$[outer].upvote":req.body.upvoted,
        "answers.$[outer].totalVote":req.body.totvot
    }},
    { "arrayFilters":[{"outer._id": req.body.ansid}]}
    )
    .then(result=>{
        res.status(200).send('Link Added successfully')
    })
    .catch(err=>{
        res.status(500).send('Error:'+err)
    })
})
router.post('/getQeury',(req,res)=>{
    Query.findById(req.body.id)
    .then(result=>{
        res.status(204).send(result)
    })
    .catch(err=>{
        res.send(500).send(err)
    })
})
router.post('/getAllQeury',(req,res)=>{
    Query.find()
    .then(result=>{
        res.status(204).send(result)
    })
    .catch(err=>{
        res.send(500).send(err)
    })
})
module.exports=router;