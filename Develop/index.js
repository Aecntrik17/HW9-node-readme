// connect inquirer package
const inquirer = require("inquirer");
// connect the generate markdown file
const generateMarkdown = require("./utils/generateMarkdown");
// require fs package
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your README?",
    name: "title",
  },
  {
    type: "input",
    message: "Please descriibe your project.",
    name: "description",
  },
  {
    type: "input",
    message: "please outline the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "please outline the usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "please outline any contributing guidelines",
    name: "contributing",
  },
  {
    type: "list",
    message: "Please choose a license?",
    name: "license",
    choices: ["Apache 2.0", "Boost 1.0", "Eclipse 1.0"],
  },
  {
    type: "checkbox",
    message: "Which tests did you run?",
    name: "tests",
    choices: ["test A", "test B", "test C"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(generateMarkdown(data));
  });
}

// function to initialize program
function start() {
  // calling the questions and sending the string through generateMarkdown to write file
  inquirer.prompt(questions).then(function (answers) {
    generateMarkdown(answers);
    writeToFile(answers);
  });
}

// function call to initialize program
start();
