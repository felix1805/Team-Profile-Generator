const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('init', () => {
        it('should require a GitHub user name', () => {
            const engineer = new Engineer ('Frank', 1, 'f@gmail.com', 'frank1407git');

            expect('github' in engineer).toBe(true);
           
        });
    });
    describe('getGithub', () => {
        it('should return the GitHub user name', () => {
            const engineer = new Engineer('Frank', 1, 'f@gmail.com', 'frank1407git');

            expect(engineer.getGithub()).toBe('frank1407git');
        });
    });
    
});
