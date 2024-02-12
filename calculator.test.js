const calculator = require(`./calculator.js`);

test(`calculator:`, ()=>{
    expect(calculator.add(5,2)).toBe(7);
    expect(calculator.subtract(5,2)).toBe(3);
    expect(calculator.divide(6,2)).toBe(3);
    expect(calculator.multiply(5,2)).toBe(10);

})