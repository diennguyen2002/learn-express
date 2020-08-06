const express = require('express')
const router = express.Router()
router.use(express.static('public'))

// middleware
router.use(function(req, res, next){
    console.log('middleware dich vu');
    next();
});

router.get("/danhsach", function(req, res){
    res.render('pages/index', {page: './dichvu/danhsach', data:''})
});

router.get("/them", function(req, res){
    res.render('pages/index', {page: './dichvu/them', data: ''})
});

module.exports = router