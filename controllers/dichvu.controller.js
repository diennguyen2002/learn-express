const db = require("../db");
const md5 = require("md5");
const shortId = require("shortid");

const middleWare = function(req, res, next){
  console.log('middleware dich vu');
  next();
};

const getDanhsach = function (req, res) {
  const dichvu = db.get("dichvu").value();
  res.render("pages/index", { page: "./dichvu/danhsach", data: dichvu });
};

const getThem =  function (req, res) {
  res.render("pages/index", { page: "./dichvu/them", data: "" });
};

const postThem = function (req, res) {
  req.body.id = shortId.generate();
  db.get("dichvu").push(req.body).write();
  res.redirect("/dichvu/danhsach");
};

module.exports = {
  middleWare,
  getDanhsach,
  getThem,
  postThem,
};
