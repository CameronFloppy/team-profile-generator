const Employee = require("./Employee");

class Manager extends Employee {
    officeNumber;
    constructor(inputName, inputId, inputEmail, inputOffice) {
        super(inputName, inputId, inputEmail)
        this.officeNumber = inputOffice;
    }
};

Manager.prototype.getRole = function() {
    return 'Manager'
}

module.exports = Manager