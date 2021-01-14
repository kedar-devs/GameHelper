const mongoose=require('mongoose')
const Schema=mongoose.Schema
const GameSchema=Schema({
    script:{type:String,required:true},
    imgarray:{type:[String],required:true},
    description:{type:String,required:true},
    name:{type:String,required:true},
    gameLink:{type:String}
})
const game=mongoose.model("Game",GameSchema)
module.exports=game
