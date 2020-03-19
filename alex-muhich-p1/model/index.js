const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if(!error){
        console.log("Success connected");
    }else{
        console.log("Error connecting to database");
    }
});

const Manga = require("./manga.model");