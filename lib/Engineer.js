const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(answers) {
        const {name, id, email, github} = answers;
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        inquirer.prompt({
            type: "input",
            name: "github",
            message: "Enter your GitHub username."
        })
        .then(({ github }) => {
            this.github = github;
            this.getRole();
        })
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer;