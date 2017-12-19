const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
require("dotenv").config();
//middleware
const checkForSession = require(`${__dirname}/middlewares/checkForSession`);
//controllers
const swag_controller = require(`${__dirname}/controllers/swag_controller`);

const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: true
  })
);

app.use(checkForSession);

app.get("/api/swag", swag_controller.read);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
