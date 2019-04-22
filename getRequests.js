//This code Executes on the server
const https = require('http');

const IP = "http://localhost:5000/"


async function sendGetPrintResult(getToSend,logger) {
  console.log("Sending:\t" + IP + getToSend)

  // This has sucsussfully Posted and got data
  https.get(IP + getToSend, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', (data) => {
      logger.log("Got it!")
    });

  }).on("error", (err) => {
    logger.log(err)
    logger.log("Error: " + err.message);
  });

}

//You can do it!
function createGetRequests(logger) {
  sendGetPrintResult("sendPixyData", logger)
  // for (i = 0; i < 1000; i++) {
  // } 
}

class ResponseGeneratorForGetterAndSetter {
  // This creates a new path for http get responses, and it allows you to get and set a variable on the server.
  //It also allows you to use your own variable for the get and set responses if you want
  constructor(app, setPath, getPath, data, logger) {

    app.get('/' + setPath + '/:data', function (req, res) {
      data = req.params.data
      logger.log("Got:" + req.params.data);
      res.send("")
    })

    app.get('/' + getPath + '/', function (req, res) {
      logger.log("sending info");
      res.send(data)
    })
  }

}

function createRouting(app, logger) {
  new ResponseGeneratorForGetterAndSetter(app, 'setPixyData', 'getPixyData', "{'c':0}", logger)
  new ResponseGeneratorForGetterAndSetter(app, 'setLidarData', 'getLidarData', "0", logger)
}


module.exports.createGetRequests = createGetRequests
module.exports.createRouting = createRouting