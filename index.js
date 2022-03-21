const inquirer = require('inquirer');
const fs = require('fs');
const members = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your first name? (Required Input)',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You did not enter a Name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your employee ID? (Required Input',
            name: 'employeeId',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('You did not enter your Employee Id!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your email address? (Required Input)',
            name: 'email',
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                    console.log('You did not enter your email address!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your office number (Required Input)',
            name: 'officeNumber',
            validate: (officeNumber) => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('You did not enter your office number!')
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, ansers.email, answers.officeNumber);
        members.push(manager);
        promptSelections();

    })
};

const promptSelections = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'what type of employee would you like to add next?'
            choices: ['Engineer', 'Intern', 'Complete team as-is']
        }
    ])
}





