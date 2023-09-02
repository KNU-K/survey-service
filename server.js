const express = require("express");
const app = express();
const routerRender = require("./routers/index");
const passport = require("passport");
const session = require("express-session");
const { conn } = require("./config/db");
const port = 8000;
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routerRender);

app.listen(port, async () => {
  try {
    await conn.connect();
    console.log("db conn .. !");

    console.log("server open ", port);
  } catch (err) {
    throw err;
  }
});
