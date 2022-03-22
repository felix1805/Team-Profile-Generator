const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor here using super command
        super(name, id, email);
        this.internSchool = internSchool;
        this.role = 'Intern'
    }
    getSchool() {
        return this.internSchool;
    };

}

module.exports = Intern;