const Employee = require("./employee");

class Manager extends Employee {
constructor(name, id, email, title, officeNumber){
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
    this.title = title;
}
getOfficeNumber(officeNumber){
    return this.officeNumber;
}
getRole(title){
    return "Manager";
}
}

module.exports = Manager;