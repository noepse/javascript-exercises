const palindromes = function (str) {
    const letters = str.replaceAll(/[^A-z0-9]/g, "").split("");
    const reversedLetters = [];

    for (let i = letters.length - 1; i>=0; i--){
        reversedLetters.push(letters[i]);
    }
    if (reversedLetters.join('').toLowerCase() === letters.join('').toLowerCase()){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
