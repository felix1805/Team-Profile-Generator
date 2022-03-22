const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, managerOffice) {
        // call parent constructor here using super command:
        super(name, id, email);
        this.managerOffice = managerOffice;
        this.role = 'Manager'
    };

}

module.exports = Manager;