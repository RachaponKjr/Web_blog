const express = require('express')
const morgan = require("morgan")
const app = express();
const PORT = 8080
//PART ROUT
const itemRoute = require("./routes/itemRoute.js")

app.use(express.json)
app.use(morgan("div"))

//ROUT
app.get("/",itemRoute)

app.listen(PORT,() => console.log(`SERVER IS Running in PORT:${PORT}`))