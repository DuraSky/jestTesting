const reverse = require('./reverse.js')

test('function that takes a string and returns it reversed', ()=>{
    expect(reverse(`Ahoj`)).toBe("johA");
    expect(reverse(`Lukas`)).toBe(`sakuL`);
})