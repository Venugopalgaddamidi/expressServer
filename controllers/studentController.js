const Student = require('../models/studentModel');
const getstudent = async (req, res) => {
    const students = await Student.find();

    res.status(200).json({
        data: students
    })
}



module.exports = { getstudent };