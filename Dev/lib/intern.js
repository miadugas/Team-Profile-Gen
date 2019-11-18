const Employee = require("./employee");

class Intern extends Employee {
constructor(name, id, email, title, school) {
    super(name, id, email, "Intern");
    this.title = title;
    this.school = school;
}
getSchool(school){
    return this.school;
}
getRole(title){
    return "Intern"
}
}

module.exports = Intern;