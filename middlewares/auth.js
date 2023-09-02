const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("unAuthorizedPage");
  }
};

module.exports = { auth };
