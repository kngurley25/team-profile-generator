const questions = [
    {
        type: "list",
        name: "employeeType",
        message: "Which employee position type would you like to add?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "I do not want to add another employee"
        ],
        validate: employeeType => {
            if (employeeType === "I do not want to add another employee") {
                return;
            }
        }
    },
    {
        type: "input",
        name: "name",
        message: "Enter name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee ID number.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address."
    },
    
]

module.exports = questions;