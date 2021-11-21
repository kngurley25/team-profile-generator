const fs = require("fs");
const inquirer = require("inquirer");

const generatePage = require("./src/page-template");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

const questions = require("./utils/questions");
const managerQuestions = require("./utils/managerQuestions");
const engineerQuestions = require("./utils/engineerQuestions");
const internQuestions = require("./utils/internQuestions");

const employeeArr = [];

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
        console.log(managerAnswers);
        employeeArr.push(employee);
        console.log(employeeArr);
        console.log(`
        ADD NEW EMPLOYEE
        `);
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
                        employeeArr.push(promptAnswers);
                    })
            }
            if (answers.employeeType === "Engineer") {
                inquirer.prompt(engineerQuestions)
                    .then(answer => {
                        let newAnswer = answer;
                        promptAnswers = {...promptAnswers, ...newAnswer};
                        employeeArr.push(promptAnswers);
                    })
            }
            if (answers.employeeType === "Intern") {
                inquirer.prompt(internQuestions)
                    .then(answer => {
                        let newAnswer = answer;
                        promptAnswers = {...promptAnswers, ...newAnswer};
                        employeeArr.push(promptAnswers);
                    })
            }
            if (answers.employeeType === "NONE") {
                return;
            }
        })
}

promptManager()

// const writeFile = () => {

//     const generatedHtml = generatePage(employeeArr);

//     fs.writeFile("index.html", generatedHtml,
//         (err) => {
//             if (err) throw err;
//             else {
//                 console.log("File written successfully.");
//             }
//         })
// }