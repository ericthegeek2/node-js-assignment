const uuidv4 = require('uuid')
const { format } = require('date-fns');
const { use } = require('express/lib/application');
const path = require('path')
const fs = require('fs')



process.on('uncaughtException', (error) =>{
    console.log(`uncaught error: ${error}`)
    process.exit(1)
})


const LogEvent = async(message) =>{
    try{
   const logItems = {
    userId: uuidv4.v4(),
    date: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
    msg: message 
   }
   const data = JSON.stringify(logItems)
  await fs.appendFile(path.join(__dirname,'eventLogs.txt'),data,(err,data)=>{
         if (err) throw err
         console.log('successfully wrote to file');
   })



  
    }
    catch(err){
        throw err
    }
}

module.exports = LogEvent