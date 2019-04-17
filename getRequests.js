//This code Executes on the server
const https = require('http');

const IP = "http://10.0.10.10:5000/"

function printResult() {
  try {
    console.log(JSON.parse(data));
  }
  catch {
    console.log("An error ouccoured while reading the json, Got:\n"+data)
  }
}


async function sendGetPrintResult(getToSend) {
  console.log("Sending:\t"+ IP+getToSend)

  // This has sucsussfully Posted and got data
  https.get(IP+getToSend, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', printResult());

  }).on("error", (err) => {
      console.log(err)
      console.log("Error: " + err.message);
  });

}


function createGetRequests(app) {
    // sendGetPrintResult("sendPixyData")

    // for (i = 0; i < 1000; i++) {
    // } 

    sendGetPrintResult("cmd/{'c':7}")

}



var pixyInfo = "{'c':0}"

class RouterGetterSetter {
    // This creates a new path for http get responses, and it allows you to get and set a variable on the server.
    //It also allows you to use your own variable for the get and set responses if you want
    constructor(app, setPath, getPath, data) {

        app.get('/'+setPath+'/:data', function (req, res) {
            data = req.params.data

            console.log("Got:" + req.params.data);
            res.send("")
        })
          
        app.get('/'+getPath+'/', function (req, res) {
            console.log("sending info");
            res.send(data)
        })
    }

}

function createRouting(app) {
    new RouterGetterSetter(app,'setPixyData','getPixyData',"")
    new RouterGetterSetter(app,'setLidarData','getLidarData',"0")
}


module.exports.createGetRequests = createGetRequests

module.exports.createRouting = createRouting