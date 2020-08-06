const express = require('express')
const router = express.Router()
router.use(express.static('public'))

// middleware
router.use(function(req, res, next){
    console.log('middleware san pham');
    next();
});

router.get("/danhsach", function(req, res){
    res.render('pages/index', {page: './sanpham/danhsach', data:''})
});

router.get("/them", function(req, res){
    res.render('pages/index', {page: './sanpham/them', data: ''})
});

module.exports = router