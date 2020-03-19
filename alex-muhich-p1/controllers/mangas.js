const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const MangaModel = mongoose.model("Manga");

router.get('/list', (req, res)=>{

    MangaModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", { data: docs });
        }else{
            res.send("Error");
        }
    });
});

module.exports = router;
