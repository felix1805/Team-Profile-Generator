const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        // call parent constructor here:
        super(name, id, email);

        this.internSchool = internSchool;
    }
    getSchool() {
        return this.internSchool;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;