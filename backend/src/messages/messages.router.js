/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { getPublicMessage, getProtectedMessage, getRoleBasedMessage } = require("./messages.service");
const { checkJwt } = require("../authz/check-jwt");

const { jwtAuthz } = require("../authz/check-jwt");
// const jwtAuthz = require("express-jwt-authz");




/**
 * Router Definition
 */

const messagesRouter = express.Router();
const app = express();
/**
 * Controller Definitions
 */


const checkPermissions = jwtAuthz(["add:shift"], {
  customScopeKey: "permissions",
  checkAllScopes: true
});


// GET messages/

messagesRouter.get("/public-message", (req, res) => {
  const message = getPublicMessage();
  res.status(200).send(message);
});

messagesRouter.get("/protected-message", checkJwt, (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});

messagesRouter.get("/role", checkJwt, checkPermissions, (req, res) => {
  const message = getRoleBasedMessage();
  res.status(200).send(message);
});


// app.get("/role", checkJwt, checkPermissions, (req, res) => {
//   const message = getRoleBasedMessage();
//   res.status(200).send(message);
// });


module.exports = {
  messagesRouter,
};
