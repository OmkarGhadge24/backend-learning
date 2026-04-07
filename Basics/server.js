const express = require('express')
// Create an instance of server
const app = express()
// Define a route
app.get("/",(req, res)=>{
    res.send("Hello World")
})
// Start the server
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})