const student= (req, res) => {
    res.json([
        {
            name: "Gopal",
            branch: "IT",
        },
        {
            name: "Bob",
            branch: "CSE"
        },
        {
            name: "Charlie",
            branch: "ECE"
        }
    ]);
}

module.exports = { student };