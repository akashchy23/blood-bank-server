const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hi Guy's it's Akash Zain")
})

app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
})