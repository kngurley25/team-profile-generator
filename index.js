const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
new Employee().getName();

const generatedPage = require("./src/page-template");

// const promptManager = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "Enter team manager name."
//         },
//         {
//             type: "input",
//             name: "Id",
//             message: "Enter team manager employee ID number.",
//         },
//         {
//            type: "input",
//            name: "email",
//            message: "Enter team manager email address." 
//         },
//         {
//             type: "input",
//             name: "officeNumber",
//             message: "Enter team manager office number."
//         }
//     ])
// }

// const promptEmployeeAdd = () => {   
//     console.log(`
//     ADD NEW EMPLOYEE
//     `);

//     inquirer.prompt({
//         type: "list",
//         name: "confirmEmployeeType",
//         message: "Which employee position type would you like to add?",
//         choices: [
//             "Manager",
//             "Engineer",
//             "Intern",
//             "I do not want to add another employee"
//         ]
//     })
//     .then((answer) => {
//         console.log(answer);
//     })
// }


// promptManager()
//     .then(promptEmployeeAdd)

// function createFile() {
//     fs.writeFile(path.join("./", "dist", "index.html"), generatedPage,
//             (err) => {
//                 if (err) throw err;
//                 console.log("The file has been saved.");
//             })
// }