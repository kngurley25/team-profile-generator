const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(answers) {
        const {name, id, email, school} = answers;
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
}

module.exports = Intern;