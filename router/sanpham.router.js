const express = require('express')
const router = express.Router()
router.use(express.static('public'))

// middleware
router.use(function(req, res, next){
    console.log('middleware sp');
    next();
});

router.get("/danhsach", function(req, res){
    res.render('pages/sanpham/danhsach');
});

router.get("/them", function(req, res){
    res.render('pages/sanpham/them');
});

module.exports = router