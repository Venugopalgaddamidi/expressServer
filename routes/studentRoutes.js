const express = require('express');
const { getstudent, addstudent } = require('../controllers/studentController');
const studentRoute=express.Router();

studentRoute.get('/',getstudent);



module.exports = studentRoute;