const db = require("../db");
const md5 = require("md5");
const shortId = require("shortid");

const middleWare = function (req, res, next) {
  console.log("middleware san pham");
  next();
};

const getDanhsach = function (req, res) {
  const sanpham = db.get("sanpham").value();
  res.render("pages/index", { page: "./sanpham/danhsach", data: sanpham });
};

const getThem = function (req, res) {
  res.render("pages/index", { page: "./sanpham/them", data: "" });
};

const postThem = function (req, res) {
  req.body.id = shortId.generate();
  db.get("sanpham").push(req.body).write();
  res.redirect("/sanpham/danhsach");
};

module.exports = {
  middleWare,
  getDanhsach,
  getThem,
  postThem,
};
