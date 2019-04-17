//This code Executes on the server
const https = require('http');

// This has sucsussfully Posted and got data
https.get("http://10.0.10.10:5000/sendPixyData", (resp) => {
   let data = '';

   // A chunk of data has been recieved.
   resp.on('data', (chunk) => {
     data += chunk;
   });

   // The whole response has been received. Print out the result.
   resp.on('end', () => {
     try {

      console.log(JSON.parse(data));

     }
     catch {
       console.log("An error ouccoured while sending the get reuqest to: 'http://10.0.10.10:5000/sendPixyData/'\nand we can't read the json")
     }
   });

}).on("error", (err) => {
     console.log(err)
     console.log("Error: " + err.message);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express()


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  console.log("Someone Connected!")
  res.render('index');
})
app.post('/', function (req, res) {
  console.log("Someone Connected!")
  res.render('index');
})
// app.post('/toggleData', function (req, res) {
//   console.log("Toggled Data");
//   res.render('index');
// })

var pixyInfo = "{'c':0}"

app.get('/pixy/:data', function (req, res) {
  // console.log(req);
  pixyInfo = req.params.data
  console.log("Got:" + req.params.data);
  res.send("")
})

app.get('/getPixyData/', function (req, res) {
  console.log("sending info");
  res.send(pixyInfo)
})


app.listen(3000, "0.0.0.0", function () {
  console.log('Example app listening on port 3000!')
})


