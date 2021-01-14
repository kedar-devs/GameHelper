const express=require('express');
const fileUpload = require('express-fileupload')
const app=express()
const cors=require('cors')
require('./mongoose.js')
app.use(express.json())
app.use(cors())
app.use(fileUpload)
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`listening to port ${port}.....`)
})
