const Employee = require("./Employee");

class Intern extends Employee {
    school;
    constructor(inputName, inputId, inputEmail, inputSchool) {
        super(inputName, inputId, inputEmail)
        this.school = inputSchool;
    }
}

Intern.prototype.getSchool = function() {
    return this.school;
}

Intern.prototype.getRole = function() {
    return 'Intern'
}

module.exports = Intern