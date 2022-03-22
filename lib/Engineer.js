const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, engineerGitHub) {
        // call parent constructor here:
        super(name, id, email);

        this.engineerGitHub = engineerGitHub;
    }
    getGithub() {
        return this.engineerGitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;