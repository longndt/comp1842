const http = require('http')
const fs = require('fs')
const port = 9999
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile('pages/index.html', (err, data) => {
         if (!err)
            res.write(data)
         else
            res.write(err)
         res.end()
      })
   } else if (req.url === '/admin') {
      fs.readFile('pages/admin.html', (err, data) => {
         if (!err)
            res.write(data)
         else
            res.write(err)
         res.end()
      })
   } else if (req.url === '/login') {
      res.setHeader("Content-Type", "text/html")
      res.write("<h1>This is login page</h1>")
      res.end()
   } else if (req.url === '/fpt') {
      res.setHeader("Content-Type", "application/json")
      res.write(JSON.stringify({ company : "FPT"}))
      res.end()
   } else {
      res.end ("Invalid URL")
   }
})
server.listen(port, () => {
   console.log("http://localhost" + port)
})