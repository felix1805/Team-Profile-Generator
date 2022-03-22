describe('Engineer', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const engineer = new Engineer ('Frank', 1, 'f@gmail.com');

            expect('name' in engineer).toBe(true);
            expect('id' in engineer).toBe(true);
            expect('email' in engineer).toBe(true);
            
        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const engineer = new Engineer('Frank', 1, 'f@gmail.com');

            expect(engineer.getName()).toBe('Frank');
        });
    });
    describe('getId',() => {
        it('should return the id', () => {
            const engineer = new Engineer('Frank', 1, 'f@gmail.com');

            expect(engineer.getId()).toBe(1);
        });
    });
    describe('getRole', () => {
        it('should return the role', () => {
            const engineer = new Engineer('Frank', 1, 'f@gmail.com');

            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});
