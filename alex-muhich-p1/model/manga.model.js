const mongoose = require('mongoose');

var MangaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Required"
    },
    volume: {
        type: String
    },
    author: {
        type: String
    }
});

mongoose.model("Manga", MangaSchema);