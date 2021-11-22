const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // const {name, id, email, github} = answers;
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer;