const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const siteGenerator = require('./src/site-generator.js')
const teamInfo = [];


const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your team manager\'s first name?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'What is your team manager\'s employee ID?',
                name: 'managerId',

            },
            {
                type: 'input',
                message: 'What is your manager\'s email address?',
                name: 'managerEmail',

            },
            {
                type: 'input',
                message: 'What is your manager\'s office number?',
                name: 'managerOffice'

            }])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            teamInfo.push(manager);
            console.log(manager);
            promptMain();
        })
};

const promptMain = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'Are you done building your team? Or do you have to add more users?',
                name: 'finishTeam',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish building my Team']
            }])
        .then(userSelection => {
            switch (userSelection.finishTeam) {
                case "Add an Engineer":
                    engineerPrompt();
                    break;
                case "Add an Intern":
                    internPrompt();
                    break;
                case "Finish building my Team":
                    assembleTeam();
                    break;

            }

        });
};

const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Engineer\'s name?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s employee ID?',
                name: 'engineerId'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s email?',
                name: 'engineerEmail'
            },
            {
                type: 'value',
                message: 'What is the engineer\'s gitHub username?',
                name: 'engineerGitHub'
            }])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
            teamInfo.push(engineer);
            console.log(engineer)
            promptMain();
        })
};
const internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Intern\'s name?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'What is the Inter\'s employee ID?',
                name: 'internId'
            },
            {
                type: 'input',
                message: 'What is the Intern\'s email?',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'What is the Intern\'s School username?',
                name: 'internSchool'
            }])
        .then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            teamInfo.push(intern);
            console.log(intern);
            promptMain();
        })
};
const assembleTeam = (fileName, data) => {
    fs.writeFile('./dist/page.html', siteGenerator(teamInfo), (err) => {
        err ? console.error(err) : console.log('success!')
    });
};


managerPrompt();