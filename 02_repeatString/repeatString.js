const repeatString = function(string, num) {
let longString = '';
if (num<0){
    return 'ERROR'
}
for (let i = num; i >= 1; i--){
    longString += string;
}
return longString;
};

// Do not edit below this line
module.exports = repeatString;
