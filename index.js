// npm packages
const fs = require("fs");
const inquirer = require("inquirer");

// HTML with template literals
const generatePage = require("./src/page-template");

// Constructor classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Employee prompted questions
const questions = require("./utils/questions");
const managerQuestions = require("./utils/managerQuestions");
const engineerQuestions = require("./utils/engineerQuestions");
const internQuestions = require("./utils/internQuestions");

// array to store team info from prompts
const employeeArr = [];

// initial manager minimum added team member
const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team manager name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter team manager employee ID number.",
        },
        {
           type: "input",
           name: "email",
           message: "Enter team manager email address." 
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter team manager office number."
        }
    ])
    .then(managerAnswers => {
        const employee = new Manager(managerAnswers);
        // console.log(managerAnswers);
        employeeArr.push(employee);
        // console.log(employeeArr);
        promptEmployeeAdd();
    })
}

const promptEmployeeAdd = () => {
    inquirer.prompt(questions)
        .then(answers => {
            let promptAnswers = answers;
            if (answers.employeeType === "Manager") {
                inquirer.prompt(managerQuestions)
                    .then(answer => {
                        let newAnswer = answer;
                        promptAnswers = {...promptAnswers, ...newAnswer};
                        const employee = new Manager(promptAnswers);
                        employeeArr.push(employee);
                        // console.log(employeeArr);
                        promptEmployeeAdd();
                    })
            }
            if (answers.employeeType === "Engineer") {
                inquirer.prompt(engineerQuestions)
                    .then(answer => {
                        let newAnswer = answer;
                        promptAnswers = {...promptAnswers, ...newAnswer};
                        const employee = new Engineer(promptAnswers);
                        employeeArr.push(employee);
                        // console.log(employeeArr);
                        promptEmployeeAdd();
                    })
            }
            if (answers.employeeType === "Intern") {
                inquirer.prompt(internQuestions)
                    .then(answer => {
                        let newAnswer = answer;
                        promptAnswers = {...promptAnswers, ...newAnswer};
                        const employee = new Intern(promptAnswers);
                        employeeArr.push(employee);
                        // console.log(employeeArr);
                        promptEmployeeAdd();
                    })
            }
            if (answers.employeeType === "NONE") {
                writeFile(employeeArr);
            }
        })  
}

// initialize app
promptManager();

// create HTML file in dist folder
const writeFile = employeeArr => {

    const generatedHtml = generatePage(employeeArr);

    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', generatedHtml, err => {
        if (err) {
          reject(err);
          return;
        }
        console.log("File has been created");
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };