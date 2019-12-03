class HelloScreamer {
    screamHello() {
        return 'hello';
    }
}

describe('Test scpe', () => {
    it('Calculates something', () => {
        const screamer = new HelloScreamer();
        const screamed = screamer.hello();
        expect(screamed).toEqual('hello');
    });
});
