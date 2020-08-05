const express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine','ejs');
app.set('views','./views');
const port = 3000;

app.get("/", function(req, res){
    res.render('pages/trangchu');
});

app.get("/sanpham", function(req, res){
    res.render('pages/sanpham');
});

app.listen(port, function(){console.log('Server started at port '+port)});
