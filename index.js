const inquirer = require('inquirer')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./src/questions');
const generatePage = require('./src/page-template');
const writeFile = require('./generate-site.js');


const employees = [];

function managerPrompt () {
    inquirer.prompt(questions.managerQuestions).then((answers) => {
        let manager = new Manager(answers.name, answers.employeeid, answers.email, answers.officenumber);
        employees.push(manager);
        console.log(JSON.stringify(answers))
        if (answers.newemployee === 'Intern') {
            internPrompt();
        } else if (answers.newemployee === 'Engineer') {
            engineerPrompt();
        }
    })
}

function engineerPrompt() {
    inquirer.prompt(questions.engineerQuestions).then((answers) => {
        let engineer = new Engineer(answers.name, answers.employeeid, answers.email, answers.github);
        employees.push(engineer);
        if(answers.addemployee) {
            if(answers.newemployee === 'Intern') {
                internPrompt()
            } else if ( answers.addemployee === 'Engineer') {
                engineerPrompt()
            }
        }
    })
}

function internPrompt() {
    inquirer.prompt(questions.internQuestions).then((answers) => {
        let intern = new Intern(answers.name, answers.employeeid, answers.email, answers.school);
        employees.push(intern);
        if(answers.addemployee) {
            if(answers.newemployee === 'Intern') {
                internPrompt()
            } else if ( answers.addemployee === 'Engineer') {
                engineerPrompt()
            }
        }
    })
}

managerPrompt()
.then(writeFile(generatePage));