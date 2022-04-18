const Employee = require("./Employee");

class Engineer extends Employee {
    github;
    constructor(inputName, inputId, inputEmail, inputGithub) {
        super(inputName, inputId, inputEmail);
        this.github = inputGithub;
    }
}

Engineer.prototype.getRole = function() {
    return 'Engineer'
}

Engineer.prototype.getGithub = function() {
    return this.github;
}


module.exports = Engineer