const db = require("../db");
const md5 = require("md5");
const shortId = require("shortid");

const middleWare = function (req, res, next) {
  console.log("middleware nguoi dung");
  next();
};

const getDanhsach = function (req, res) {
  const nguoidung = db.get("nguoidung").value();
  res.render("pages/index", { page: "./nguoidung/danhsach", data: nguoidung });
};

const getThem = function (req, res) {
  const data = {
    errors: [],
    keepData: {}
  }
  res.render("pages/index", { page: "./nguoidung/them", data: data});
};

const postThem = function (req, res) {
  const errors = [];
  if(!req.body.username){
    errors.push('Username is required');
  }
  if(!req.body.email){
    errors.push('Email is required');
  }
  if(!req.body.password){
    errors.push('Password is required');
  }
  if(errors.length){
    const data = {
      errors: errors,
      keepData: req.body
    }
    res.render("pages/index", { page: "./nguoidung/them", data: data});
    return;
  }
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
