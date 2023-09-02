const passport = require("passport");

const router = require("express").Router();

router.get("/", passport.authenticate("naver"));
router.get(
  "/callback",
  passport.authenticate("naver", {
    failureRedirect: "/",
    successRedirect: "/survey",
  })
);
module.exports = router;
