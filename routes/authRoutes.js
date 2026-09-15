const express = require('express');
const { login, signup } = require('../controllers/authContollers');

const authRoute = express.Router();

authRoute.post("/login",login);


authRoute.post("/signup",signup);

module.exports = authRoute;