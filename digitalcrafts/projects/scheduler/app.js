const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mustacheExpress = require('mustache-express');
const engine = mustacheExpress();
 
// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
 
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {

    res.render('index');

})

app.get('/login', (req, res) => {

    res.render('index');

})

app.get('/register', (req, res) => {

    res.render('index.mustache');

})

app.listen(3000, function(){
    console.log("Server is runniing on 3000")
})





