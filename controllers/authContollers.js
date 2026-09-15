const login = (req, res) => {
    res.json({
        message: "login successful"
    });
}

const signup = (req, res) => {
    res.json({
        message: "signup successful"
    });
}

module.exports = { login, signup };