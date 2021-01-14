const mongoose=require("mongoose")
const Schema=mongoose.Schema
const AnswerSchema=Schema({
    answer: {type:String,required:true},
    username: {type:String,required:true},
    upvotes:{type:Number},
    downvote:{type:Number},
    totalVote:{type:Number}

})
const QuerySchema=Schema({
    question:{type:String},
    answers:[AnswerSchema],
    quetioneer:{type:String,required:true},
    upvote:{type:Number},
    downvotes:{type:Number},
    totalVotes:{type:Number}
})
const query=mongoose.model('Query',QuerySchema)
module.exports=query
