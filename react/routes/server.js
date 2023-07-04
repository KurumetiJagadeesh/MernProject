const express = require('express');
const mongoose = require('mongoose');

const app = express();
const url = "mongodb://localhost/sec09"
mongoose.connect(url);
const con = mongoose.connection;

con.on("open",()=>{
    console.log("Connected to DB")
})

app.use(express.json())

const StudeRouter = require('./routes/students');
app.use("/students",StudeRouter);

app.listen(9000,()=>{
    console.log("Server stared...");
})