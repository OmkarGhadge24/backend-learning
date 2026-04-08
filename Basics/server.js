// Create an instance of server
// const express = require('express')
// const app = express()

// Basic notes application using express
const app = require('./src/app')

// Define a route
// app.get("/",(req, res)=>{
//     res.send("Hello World")
// })
// Start the server
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})