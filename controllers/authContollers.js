const Student = require('../models/studentModel');
const bcrypt = require('bcryptjs');

const login = (req, res) => {
    res.json({
        message: "login successful"
    });
}

const signup = async (req, res) => {
    const { name, email, age, branch, password } = req.body;

    if (!name || !email || !age || !branch || !password) {
        return res.status(400).json({
            message: "Provide valid input"
        });
    }
    const existingStudent =await Student.findOne({ email: email });

    if (existingStudent) {
        return res.status(400).json({
            message: "EmailId is already registered"
        })
    }


    const encryptpass=await bcrypt.hash(password, 4);

    const student =await Student.create({
        name: name,
        email: email,
        age: age,
        branch: branch,
        password: encryptpass
    });

    res.status(200).json({
        message:"Account created successfully"
    })
    

}




module.exports = { login, signup };