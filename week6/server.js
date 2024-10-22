//step 1: import "http" library for http server
const http = require('http')
//step 2: setup web server port
const port = 5000    //default port for NodeJS server is 3000
//step 3: create web server
const server = http.createServer((request, response) => {
   //set header for response
   response.writeHead(200, {'Content-Type':'text/html'})

   //server returns response(s)
   response.write("Hello world<br>")
   response.write("<h1>We are setting up NodeJS server</h1>");
   response.write("<p>We will develop MEVN full stack web app in this module</p>")

   //server ends response (DO NOT forget this)
   response.end()
})
//step 4: run web server by listening to port
server.listen(port)
//web URL: localhost:5000