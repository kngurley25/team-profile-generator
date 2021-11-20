const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        inquirer.prompt({
            type: "text",
            name: "github",
            message: "Enter your GitHub username."
        })
        .then(({ inputGithub }) => {
            this.github = inputGithub;
            this.getRole();
        })
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer;