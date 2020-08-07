const themValidation = function (req, res, next) {
  const errors = [];
  if (!req.body.username) {
    errors.push("Username is required");
  }
  if (!req.body.email) {
    errors.push("Email is required");
  }
  if (!req.body.password) {
    errors.push("Password is required");
  }
  if (errors.length) {
    const data = {
      errors: errors,
      keepData: req.body,
    };
    res.render("pages/index", { page: "./nguoidung/them", data: data });
    return;
  }
  next();
};
module.exports = {
  themValidation,
};
