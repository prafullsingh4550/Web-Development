const express = require('express');
const app = express();

const port = 3000;
app.get('/',(req,res)=>{
    res.send("Hello Prafull Congratulations Your Server Started")
})

app.listen(port,() =>{
    console.log(`app started at ${port}`)
})