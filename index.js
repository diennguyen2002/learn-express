const express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine','ejs');
app.set('views','./views');
const port = 3000;

const sanphamRouter = require('./router/sanpham.router');

app.get("/", function(req, res){
    res.render('pages/trangchu/trangchu');
});

app.use("/sanpham", sanphamRouter);

app.listen(port, function(){console.log('Server started at port '+port)});
