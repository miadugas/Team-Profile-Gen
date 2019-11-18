function generateHTML(managerArr, engineerArr, internArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Summary</title>
    </head>
    <style>
    body {
        font-family:Arial, Helvetica, sans-serif;
        margin: 0 auto;
        background-color: #fff;
    }
    #header {
        background-color: #133e4e;
        display: flex;
        justify-content: space-around;
        color: white;
        height: 8rem;
    }
    .card {
        border: 2px solid black;
        margin: 1%;
        text-align: center;
        border-radius: 5px;
        height: 300px;
        min-width: 380px;
        float: left;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5),0 2px 2px rgba(0,0,0,0.23);
        background-color: grey;
    }
    .nameDiv {
        background-color: #4099FF;
        padding: 10px 20px 1px 20px;
        color: white;
    }
    .employeeInfo {
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 3px;
    }
    h1 {
        position: relative;
        font-size: 80pt;
        bottom: 55px;
    }
    h2 {
        margin-top: 0%;
        padding-top: 5px;
        
    }
    h5 {
        font-weight: 100;
        padding: 0px 10px 0px 10px;
        border: thin black solid;
        margin: 0% 0% 0% 0%;
        height: 3em;
        line-height: 40px;
    }
    #id {
        margin-top: 2em;
    }
    
    </style>
    
    
    <body>
    <div id="header">
        <h1>Team Members</h1>
    </div>
    ${managerArr.map(manager =>
        `
        <div class="card manager col">
            <div class="nameDiv">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class ="employeeInfo">   
                <h5 id="id">ID: ${manager.id}</h5>
                <h5>Email: <a href="${manager.email}">${manager.email}</a></h5>
                <h5>Office Number: ${manager.officeNumber}</h5>
            </div>
        </div>
        `.trim()
        ).join("")}
    
    ${engineerArr.map(engineer =>
        `
        <div class="card engineer col">
            <div class="nameDiv">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
            <div class="employeeInfo">
                <h5 id="id">ID: ${engineer.id}</h5>
                <h5>Email: <a href="${engineer.email}">${engineer.email}</a></h5>
                <h5>GitHub: <a href="${engineer.github}">${engineer.github}</a></h5>
            </div>
        </div>
        `.trim()
        ).join("")}
    ${internArr.map(intern =>
        `
        <div class="card intern col">
            <div class="nameDiv">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
            <div class="employeeInfo">
                <h5 id="id">ID: ${intern.id}</h5>
                <h5>Email: <a href="${intern.email}">${intern.email}</a></h5>
                <h5>School: ${intern.school}</h5>
            </div>
        </div>
        `.trim()
        ).join("")}
    </body>
    </html>`
    }
    
    module.exports = {
    generateHTML: generateHTML
    }