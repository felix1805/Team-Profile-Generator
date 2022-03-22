const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, managerOffice) {
        // call parent constructor here:
        super(name, id, email);

        this.managerOffice = managerOffice;
    }
    getOfficeNumber() {
        return this.managerOffice;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;