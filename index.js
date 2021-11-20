// const fs = require("fs");
// const path = require("path");

const Manager = require("./lib/Manager");
// const generatedPage = require("./src/page-template");

new Manager().getName();

// function init() {

//     fs.writeFile(path.join("./", "dist", "index.html"), generatedPage,
//             (err) => {
//                 if (err) throw err;
//                 console.log("The file has been saved.");
//             })
// }