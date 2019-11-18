const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./Dev/lib/intern.js");
const Manager = require("./Dev/lib/manager.js");
const Employee = require("./Dev/lib/employee.js");
const Engineer = require("./Dev/lib/engineer.js");
const generateHTML = require("./Dev/generateHTML.js")

const internArr = [];
const managerArr = [];
const engineerArr = [];
const html = "index.html";



function writeToFile(html, data) {
fs.writeFile(html, data, function(err){
    if (err) {
        return Error;
    }
})
}
function getUserInfo() {
inquirer.prompt([
    {
        type: "list",
        message: "Choose your position",
        name: "position",
        choices: [
            "Manager",
            "Engineer",
            "Intern", 
            "Done"
        ]}
    ]).then(function(data){
        console.log(data)
        if (data.position == "Manager") {
            newManager();
        } else if (data.position == "Engineer") {
            newEngineer();
        } else if (data.position == "Intern") {
            newIntern();
        } else if (data.position == "Done") {
            done();
        }
    
    })
    
}

function newManager() {
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter manager's name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee ID",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your Email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter office number"
    }
])
.then(function(data) {
    const manager = new Manager (data.name, data.id, data.email, "Manager", data.officeNumber);
    managerArr.push(manager);
    getUserInfo();
})
}

function newEngineer() {
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "Enter your employee ID"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your Email"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
]).then(function(data){
    const engineer = new Engineer(data.name,data.id,data.email, "Engineer",data.github);
    engineerArr.push(engineer);
    getUserInfo();
})
}

function newIntern() {
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "Enter your employee id",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your Email",
    },
    {
        type: "input",
        name: "school",
        message: "Which school do you attend?",
    }
]).then(function(data){
    const intern = new Intern(data.name, data.id, data.email, "Intern", data.school);
    internArr.push(intern);
    getUserInfo();
})
}

async function done(data) {
writeToFile(html, generateHTML.generateHTML(managerArr, engineerArr, internArr));
}

getUserInfo();