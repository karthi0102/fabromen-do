const mongoose = require("mongoose")
const config = require("config")

const db = config.get("MONGO_URL")

const conenctDB = async () => {
    try{
        await  mongoose.connect(db,{
           useNewUrlParser:true,
       });
       console.log("Mongo connected");
    }catch(err){
        console.error(err.message)
        //Exit process 
        process.exit(1);
    }
}

module.exports =  conenctDB;