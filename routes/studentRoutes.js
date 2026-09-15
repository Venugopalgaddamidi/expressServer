const express = require('express');
const { student } = require('../controllers/studentController');
const studentRoute=express.Router();

studentRoute.get('/',student);

studentRoute.post('/', (req, res) => {
    res.json({
        message: "new student added"
    });
});

module.exports = studentRoute;