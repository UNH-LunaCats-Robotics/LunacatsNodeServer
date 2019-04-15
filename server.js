//This code Executes on the server

const https = require('http');

//This has sucsussfully Posted and got data
// https.get("http://10.0.10.10:5000/cmd/{'c':5}", (resp) => {
//    let data = '';
//
//    // A chunk of data has been recieved.
//    resp.on('data', (chunk) => {
//      data += chunk;
//    });
//
//    // The whole response has been received. Print out the result.
//    resp.on('end', () => {
//      console.log(JSON.parse(data));
//    });
//
// }).on("error", (err) => {
//      console.log(err)
//      console.log("Error: " + err.message);
// });




const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

// app.get('/', function (req, res) {
//   var name = "Foobar"
//   res.render(__dirname + "index", {name:name});
// })

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
app.get('/cmd/', function (req, res) {
  console.log("GOT IT CAP'N!");
})


app.listen(3000, "0.0.0.0", function () {
  console.log('Example app listening on port 3000!')
})
