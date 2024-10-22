const http = require('http')
const server = http.createServer((req, res) => {
   res.write("Greenwich Vietnam")
   res.write("2 Pham Van Bach - Cau Giay - Ha Noi")
   res.write("Alliance with FPT Education")
   res.end()
})
server.listen(3456, () => {
   //Hold CTRL button and click URL to run web server
   console.log('Server is running at http://localhost:3456')
})

/*
 Install and use NodeMon for automatically reload web server
   - npm install -g nodemon
   - nodemon file_name
*/