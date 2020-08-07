const express = require("express");
const router = express.Router();
const controller = require("../controllers/trangchu.controller");

// middleware
router.use(controller.middleWare);

router.get("/", controller.getIndex);

module.exports = router;
