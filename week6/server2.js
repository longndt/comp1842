const http = require('http')
//declare "fs" for "file system" library
const fs = require('fs')
const server = http.createServer((req, res) => {
   //read HTML file
   fs.readFile("demo.html", (err, data) => {
      if (err) {
         //display error
         console.log ("Read file error")
      } else {
         //load HTML content to server response
         res.write(data)
         //end response
         res.end()
      }
   })
})
const port = 8888
server.listen(port, () => {
   console.log("Server is running at http://localhost:" + port)
})