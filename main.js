const express=require('express')
const app=express()
const port=30000

app.get('/get', (req, res)=>{
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})