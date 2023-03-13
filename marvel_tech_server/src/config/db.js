// database connection
require("dotenv").config()
const mongoose = require("mongoose")

mongoose.set("strictQuery", true).connect(process.env.MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(()=>{
    console.log("DATASEBSE : CONNECTED")
  }).catch((error)=>{
    if (error.message.indexOf("ECONNREFUSED") !== -1) {
        console.error(
          "Error: The server was not able to reach MongoDB. Maybe it's not running?"
        );
      } else {
        console.log(`CONNECTION FAILED:::: \nERROR :: ${error.message}`);
      }
  })

