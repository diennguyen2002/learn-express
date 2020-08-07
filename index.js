// Include packages
const express = require('express');
const bodyParser = require('body-parser');

// Router
const trangchuRouter =  require('./router/trangchu.router');
const sanphamRouter = require('./router/sanpham.router');
const dichvuRouter = require('./router/dichvu.router');
const nguoidungRouter = require('./router/nguoidung.router');

// Configure server
const port = 3000;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views','./views');

// Apply router
app.use("/", trangchuRouter);
app.use("/sanpham", sanphamRouter);
app.use("/dichvu", dichvuRouter);
app.use("/nguoidung", nguoidungRouter);

app.listen(port, function(){console.log('Server started at port '+port)});
