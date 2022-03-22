const inquirer = require('inquirer');

const promptMain = () => {
return inquirer
.prompt ([
{
    type: 'list',
    message: 'Are you done building your team? Or do you have to add more users?',
    name: 'finishTeam',
    choices: [
    { name: 'Add an Engineer', value: 'add engineer' },
    { name: 'Add an Intern', value: 'add intern' },
    { name: 'Finish building my Team', value: 'finish team' },
]
}])
};
