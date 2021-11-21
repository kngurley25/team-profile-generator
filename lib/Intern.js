const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(answers) {
        const {name, id, email, school} = answers;
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        inquirer.prompt({
            type: "input",
            name: "school",
            message: "Enter your school name."
        })
        .then(({ school }) => {
            this.school = school;
            this.getRole();
        })
        return this.school;
    };

    getRole() {
        return "Intern";
    };
}

module.exports = Intern;