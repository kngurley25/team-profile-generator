const questions = [
    {
        type: "list",
        name: "employeeType",
        message: "Which employee position type would you like to add?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "NONE"
        ],
    }, 
]

module.exports = questions;