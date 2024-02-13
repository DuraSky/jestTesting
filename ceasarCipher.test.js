const ceasar = require('./ceasarCipher.js');

test('ceasar cypher test', ()=>{
    expect(ceasar("AHOJ",10)).toBe('KRYT');
    expect(ceasar("JAKSEMAS",10)).toBe('TKUCOWKC');
})