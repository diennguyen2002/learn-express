const express = require('express');
const router = express.Router();
router.use(express.static('public'));

router.use(function(req, res, next){
    console.log('middleware trang chu');
    next();
});

router.get("/", function(req, res){
    res.render('pages/index', {page: './trangchu/trangchu', data: ''});
});

module.exports = router