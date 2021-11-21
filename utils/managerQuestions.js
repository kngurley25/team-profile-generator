const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "Enter office number.",
        validate: officeNumber => {
            if (isNaN(officeNumber)) {
                console.log("Enter a valid office number");
                return false;
            } else {
                return true;
            }
        }
    }
]

module.exports = managerQuestions;