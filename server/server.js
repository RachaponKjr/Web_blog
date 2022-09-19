const express = require('express')
const morgan = require("morgan")
const app = express();

//host server
const http = require('http')
const hostname = '127.0.0.9'
const PORT = 8080

const server = http.createServer((req,res) => {
    res.statusCode= 200
    res.setHeader("Content",'text/plain')
    res.end('Hello World !')
})
//PART ROUT
const itemRoute = require("./routes/itemRoute.js")

app.use(express.json)
app.use(morgan("div"))

//ROUT
app.get("/api",itemRoute)

server.listen(PORT,hostname,() => console.log(`Server running at http://${hostname}:${PORT}/`))