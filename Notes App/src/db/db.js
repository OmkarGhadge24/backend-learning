const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://user:KLBzKaDVIY89ryKk@backend.5zmfwmp.mongodb.net/notes")
    console.log("Connected to database");
}

module.exports = connectDB