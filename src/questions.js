const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the manager\'s name!');
              return false;
            }
        }
    },
    {
        type: 'number',
        name: 'employeeid',
        message: 'What is the team manager\'s employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('Please enter the manager\'s employee ID!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter the manager\'s email!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'What is the manager\'s office number? (Required)',
        validate: officeInput => {
            if (officeInput) {
              return true;
            } else {
              console.log('Please enter the manager\'s office number!');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'newemployee',
        message: 'Would you like to add an engineer or an intern?',
        choices: ['Intern', 'Engineer'],
        filter(val) {
            return val
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the engineer\'s name!');
              return false;
            }
        }
    },
    {
        type: 'number',
        name: 'employeeid',
        message: 'What is the engineer\'s employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('Please enter the engineer\'s employee ID!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter the engineer\'s email!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github username? (Required)',
        validate: officeInput => {
            if (officeInput) {
              return true;
            } else {
              console.log('Please enter the engineer\'s github username!');
              return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addemployee',
        message: 'Would you like to add an additional employee? (Y/N)',
        default: true
    },
    {
        type: 'list',
        name: 'newemployee',
        message: 'Would you like to add an engineer or an intern?',
        choices: ['Intern', 'Engineer'],
        filter(val) {
            return val
        },
        when: ({ addemployee }) => addemployee
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the intern\'s name!');
              return false;
            }
        }
    },
    {
        type: 'number',
        name: 'employeeid',
        message: 'What is the intern\'s employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('Please enter the intern\'s employee ID!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter the intern\'s email!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern go to? (Required)',
        validate: officeInput => {
            if (officeInput) {
              return true;
            } else {
              console.log('Please enter the intern\'s school!');
              return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addemployee',
        message: 'Would you like to add an additional employee? (Y/N)',
        default: true
    },
    {
        type: 'list',
        name: 'newemployee',
        message: 'Would you like to add an engineer or an intern?',
        choices: ['Intern', 'Engineer'],
        filter(val) {
            return val
        },
        when: ({ addemployee }) => addemployee
    }
]

module.exports = {managerQuestions, engineerQuestions, internQuestions}