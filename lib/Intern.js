const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        inquirer.prompt({
            type: "input",
            name: "school",
            message: "Enter your school name."
        })
        .then(({ inputSchool }) => {
            this.school = inputSchool;
            this.getRole();
        })
        return this.school;
    };

    getRole() {
        return "Intern";
    };
}

module.exports = Intern;