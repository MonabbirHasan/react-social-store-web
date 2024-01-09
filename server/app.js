/* eslint-disable no-undef */
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
// const session = require("express-session");
const {
  handleNotFound,
  handleServerError,
} = require("./middleware/errorHandler");

/****************************
 * ENCODED USES START HERE
 ****************************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
/***********************************
 * ALL ROUTE HANDLING START HERE
 ***********************************/

/*******************************************
 * ERROR HANDELING MIDDLEWARE START HERE
 *******************************************/
app.use(handleNotFound);
app.use(handleServerError);
/**************************
 *SERVER RUNNING PORT?
 **************************/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
