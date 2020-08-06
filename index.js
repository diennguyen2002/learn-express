const express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine','ejs');
app.set('views','./views');
const port = 3000;

const trangchuRouter =  require('./router/trangchu.router');
const sanphamRouter = require('./router/sanpham.router');
const dichvuRouter = require('./router/dichvu.router');

app.use("/", trangchuRouter);
app.use("/sanpham", sanphamRouter);
app.use("/dichvu", dichvuRouter);

app.listen(port, function(){console.log('Server started at port '+port)});
