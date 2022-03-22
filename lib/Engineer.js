const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, engineerGitHub) {
        // call parent constructor here using super command
        super(name, id, email);
        this.engineerGitHub = engineerGitHub;
        this.role = 'Engineer'
    };
    getGithub() {
        return this.engineerGitHub;
    };
}

module.exports = Engineer;