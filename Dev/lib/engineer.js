const Employee = require("./employee")

class Engineer extends Employee {
constructor(name, id, email, title, github) {
    super(name, id, email, "Engineer");
    this.github = github;
    this.title = title;
}

getGithub(github) {
    return this.github;
}
getRole(title) {
    return "Engineer";
}
}

module.exports = Engineer;