/**************
 * Imports for Server
 */
const express = require('express');
const next = require('next')
const bodyParser = require('body-parser');
const getRequests = require("./getRequests")
// const page = require("./index")
const logger = require("./logger")
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/**************
 * Launching the html page using express
 */


app
  .prepare()
  .then(() => {
    const server = express()

    /**************
     * starting up sending get requests and routing
    //  */
    getRequests.createGetRequests(logger)
    getRequests.createRouting(server, logger)

    server.get('*', (req, res) => {
      console.log("page")
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })


  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
