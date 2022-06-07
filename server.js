const express = require("express")

if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
const app=express()
const conenctDB = require('./config/db')

conenctDB()

app.use(express.json({extended:false}))

app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))

app.get('/',(req,res)=>{
    res.send("hiii")
})
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Server is running")
})