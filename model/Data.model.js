const mongoose=require('mongoose')
const Schema=mongoose.Schema
const DataSchema=Schema({
    datatype:{type:String,required:true},
    data:{type:String,required:true},
    username:{type:String,required:true},
    status:{type:Boolean,required:true},
    emailid:{type:String,required:true}
})
const data=mongoose.model("Data",DataSchema)
module.exports=data