const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect =()=>{
    mongoose.connect(process.env.Database_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("Db ka connection Successful"))
    .catch((error)=>{
        console.log("Issue in Db Connection");
        console.error(error.message);
        process.exit(1);
    });
}
module.exports = dbConnect;
