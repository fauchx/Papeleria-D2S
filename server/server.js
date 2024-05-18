const express = require("express")
const morgan = require('morgan')

const routes = require('./routes/routes.js')

const app = express()
app.use(morgan('dev'))

app.use(routes)

app.listen(5000, ()=>{console.log("Serve listening by hako")})