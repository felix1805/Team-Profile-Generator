const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const intern = new Intern ('Jim', 2, 'j@gmail.com');

            expect('internSchool' in intern).toBe(true);
          
            
        });
    });
    describe('getSchool', () => {
        it('should return the school name', () => {
            const intern = new Intern('Jim', 2, 'j@gmail.com', 'Karlsruhe University');

            expect(intern.getSchool()).toBe('Karlsruhe University');
        });
    });
    
});
