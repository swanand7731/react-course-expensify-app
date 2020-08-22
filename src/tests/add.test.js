const add = (a, b)=> a + b;
const generateGreeting = (name = "anonymous") => `Hello ${name}`;

test('generate greeting', ()=>{
    const result = generateGreeting('Swanand');
    expect(result).toBe('Hello Swanand');

});

test('generate greeting with anonymous', ()=>{
    const result = generateGreeting();
    expect(result).toBe('Hello anonymous');

});

test('add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});