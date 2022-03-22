const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const manager = new Manager ('Bob', 3, 'b@gmail.com');

            expect('name' in manager).toBe(true);
            expect('id' in manager).toBe(true);
            expect('email' in manager).toBe(true);
            
        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const manager = new Manager ('Bob', 3, 'b@gmail.com')

            expect(manager.getName()).toBe('Bob');
        });
    });
    describe('getId',() => {
        it('should return the id', () => {
            const manager = new Manager ('Bob', 3, 'b@gmail.com')

            expect(manager.getId()).toBe(3);
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const manager = new Manager ('Bob', 3, 'b@gmail.com')
            expect(manager.getEmail()).toBe('b@gmail.com');
        });
    });
    describe('getRole', () => {
        it('should return the role', () => {
            const manager = new Manager ('Bob', 3, 'b@gmail.com')

            expect(manager.getRole()).toBe('Manager');
        });
    });
});
