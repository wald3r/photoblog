const mongoose = require('mongoose')
require('dotenv').config()


const url =
`mongodb+srv://photoblog:${process.env.DB_PW}@cluster0.jekihlg.mongodb.net/?retryWrites=true&w=majority`

  mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

  const connection = mongoose.connection;
  
  connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
  });

