const db = require("../db");

const middleWare = function (req, res, next) {
  console.log("middleware trang chu");
  next();
};

const getIndex = function (req, res) {
  res.render("pages/index", { page: "./trangchu/trangchu", data: "" });
};

module.exports = {
  middleWare,
  getIndex
};
