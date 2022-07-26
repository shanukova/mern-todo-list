require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const crudRoutes = require('./routes/crud')
const path = require('path')
const port = process.env.PORT || 8080

const app = express()
const MONGODBURL = `mongodb+srv://${process.env.MDB_KEY}@cluster0.lm6p2.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json())

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(crudRoutes)

app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    })
})

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

mongoose.connect(MONGODBURL)
    .then(result => {
        app.listen(port)
    })
    .catch(error => {
        console.log(error)
    })
