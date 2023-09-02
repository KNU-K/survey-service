const passport = require("passport");
const UserService = require("../services/user.service");

const NaverStrategy = require("passport-naver").Strategy;
require("dotenv").config();
const naver = new NaverStrategy(
  {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await UserService.findUser(profile.id);

      const createUser = {
        provider: profile.provider,
        id: profile.id,
        nickname: profile._json.nickname,
        email: profile._json.email,
      };

      if (user != null) return done(null, createUser);

      if (await UserService.createUser(createUser)) {
        done(null, createUser);
      } else {
        throw new Error("create Fail");
      }
    } catch (err) {
      return done(err, null);
    }
  }
);

passport.serializeUser((user, done) => {
  console.log("serializeUser", user.id);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserService.findUser(id);
    if (user != null) {
      console.log("deserializeUser", id);
      done(null, user);
    } else throw new Error("deserialize ERr");
  } catch (err) {
    done(err, null);
  }
});
module.exports = { naver };
