describe('Intern', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const intern = new Intern ('Jim', 1, 'j@gmail.com');

            expect('name' in intern).toBe(true);
            expect('id' in intern).toBe(true);
            expect('email' in intern).toBe(true);
            
        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const intern = new Intern('Jim', 2, 'j@gmail.com');

            expect(intern.getName()).toBe('Jim');
        });
    });
    describe('getId',() => {
        it('should return the id', () => {
            const intern = new Intern('Jim', 2, 'j@gmail.com');

            expect(engineer.getId()).toBe(2);
        });
    });
    describe('getRole', () => {
        it('should return the role', () => {
            const intern = new Intern('Jim', 2, 'j@gmail.com');

            expect(intern.getRole()).toBe('Intern');
        });
    });
});
