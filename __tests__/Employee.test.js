const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const employee = new Employee();

            expect('name' in employee).toBe(true);
            expect('id' in employee).toBe(true);
            expect('email' in employee).toBe(true);

        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const employee = new Employee('Frank', 1, 'f@gmail.com');

            expect(employee.getName()).toBe('Frank');
        });
    });
    describe('getId', () => {
        it('should return the id', () => {
            const employee = new Employee('Frank', 1, 'f@gmail.com');

            expect(employee.getId()).toBe(1);
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const employee = new Employee('Frank', 1, 'f@gmail.com');

            expect(employee.getEmail()).toBe('f@gmail.com');
        });
    });



});