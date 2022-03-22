const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('init', () => {
        it('should require the office number', () => {
            const manager = new Manager ('Bob', 3, 'b@gmail.com');

            expect('managerOffice' in manager).toBe(true);
          
            
        });
    });
   
});
