const connection = require('./model');
const express = require('express');
const application = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const mangaController = require('./controllers/mangas');

application.use(bodyparser.urlencoded({
    extended: true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

application.set("view engine", "hbs");

application.get("/", (req, res)=>{
    res.render('index', {});
});

application.use('/manga', mangaController);

application.listen("3000", ()=>{
    console.log("server started");
});