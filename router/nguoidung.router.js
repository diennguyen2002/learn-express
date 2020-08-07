const express = require("express");
const router = express.Router();
const controller = require('../controllers/nguoidung.controller');

// middleware
router.use(controller.middleWare);
// router
router.get("/danhsach", controller.getDanhsach);
router.get("/them", controller.getThem);
router.post("/them", controller.postThem);

module.exports = router;
