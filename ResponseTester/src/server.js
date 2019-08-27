const databaseURL = 'mongodb://172.16.50.175:27017'
const databaseName = 'Fdsignon'

const { urlencoded } = require('body-parser');


var express = require('express')
app = express()

app.use(express.json())

//Any header specified here will be allowed in a get request
var allowCrossDomain = function(req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'access-control-allow-origin,content-type,authentication');
    next();
}
app.use(allowCrossDomain);
app.use(urlencoded({ extended: false }));

app.get('/Reflect', function (req, res) {
    console.log("Got Get")
    res.send({body: "Got it!"})

})

app.post('/Reflect', function (req, res) {
    console.log(req.body)
    res.send(req.body)
})

app.delete('/Reflect', function (req, res) {
    console.log("Got Delete:" + req.body)
    res.send(req.body)
})



//Begin listening on port
app.listen(5000, '0.0.0.0', () => {console.log("The Server is Running!")});
