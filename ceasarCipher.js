function ceasar(string, factor){
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    if(factor < 0 || factor >= 26){
        return alert('wrong factor');
    } else {
        let encryptedString = '';
        for(let i = 0; i < string.length; i++){
            const char = string[i];
            const charIndex = alphabet.indexOf(char);
            if(charIndex !== -1){
                const encryptedCharIndex = (charIndex + factor) % 26;
                encryptedString += alphabet[encryptedCharIndex];
            } else {
                // If the character is not in the alphabet, keep it unchanged
                encryptedString += char;
            }
        }
        return encryptedString;
    }
}
module.exports = ceasar;