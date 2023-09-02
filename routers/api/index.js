const router = require("express").Router();
const naver_login = require("./naver-login.router");
const survey = require("./survey.router");
router.use("/login/naver", naver_login);
router.use("/survey", survey);
router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("good");
    }
  });
  res.redirect("/");
});
module.exports = router;
