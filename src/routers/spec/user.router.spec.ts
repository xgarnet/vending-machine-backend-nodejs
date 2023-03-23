/*
 Run Test: npx jasmine .\src\routers\spec\user.router.spec.ts
 */
describe('Hello world', () => {
    it('says hello', () => {
        expect(helloWorld())
            .toEqual('Hello world!');
    });
});

function helloWorld() {
    return 'Hello world!';
}

