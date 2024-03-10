// var a = 12;

// module.exports = a;
// var figlet = require("figlet")
// figlet("pratim!!",function(err,data){
//   if(err) {
//     console.log("something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)