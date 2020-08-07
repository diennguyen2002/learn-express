const db = require("../db");
const md5 = require("md5");
const shortId = require("shortid");

const middleWare = function (req, res, next) {
  console.log("middleware nguoi dung");
  next();
};

const getDanhsach = function (req, res) {
  const nguoidung = db.get("nguoidung").value();
  res.render("pages/index", { page: "./nguoidung/danhsach", data: "" });
};

const getThem = function (req, res) {
  res.render("pages/index", { page: "./nguoidung/them", data: "" });
};

const postThem = function (req, res) {
  req.body.id = shortId.generate();
  req.body.password = md5(req.body.password);
  db.get("nguoidung").push(req.body).write();
  res.redirect("/nguoidung/danhsach");
};

module.exports = {
  middleWare,
  getDanhsach,
  getThem,
  postThem,
};
