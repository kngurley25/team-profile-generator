const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // const {name, id, email, school} = answers;
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