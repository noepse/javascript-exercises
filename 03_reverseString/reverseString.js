const reverseString = function(str) {
    const letters = str.split('');
    const reverseLetters = [];
    for (let i = letters.length - 1; i>=0; i--){
        reverseLetters.push(letters[i]);
    }
    return reverseLetters.join('');
};

// Do not edit below this line
module.exports = reverseString;