const mongoose=require('mongoose')
const Schema=mongoose.Schema
const TuitSchema=Schema({
    tuitLink={type:String,required:true},
    channelName:{type:String,required:true},
    topic:{type:String,required:true},
    channelDescription:{type:String,required:true},
})
const tuits=mongoose.model("Tuitorial",TuitSchema)
module.exports=tuits