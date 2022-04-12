class Employee {
    name;
    id;
    email;
    constructor(inputName, inputId, inputEmail) {
        this.name = inputName;
        this.id = inputId;
        this.email = inputEmail;
    }
}

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return 'Employee';
}

module.exports = Employee