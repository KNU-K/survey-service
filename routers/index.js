const router = require("express").Router();
const passport = require("passport");
const apiRouter = require("./api/index");
const { naver } = require("../middlewares/strategy");
const { auth } = require("../middlewares/auth");
const yaml = require("js-yaml");
const fs = require("fs");
passport.use("naver", naver);

router.use("/api", apiRouter);

/**
 * @template
 */

router.get("/", (req, res) => {
  res.render("loginPage");
});

router.get("/survey", auth, (req, res) => {
  const surveyDoc = yaml.load(fs.readFileSync("./config/survey.yml", "utf8"));
  console.log(surveyDoc);
  res.render("surveyPage", {
    survey: surveyDoc,
    displayName: req.user.nickname,
  });
});
module.exports = router;
