const fibonacci = function(num) {
    if (num<=0){
        return 'OOPS'
    }
    const indexToFind = parseInt(num) - 1;
    const sequence = [1, 1];
    if (indexToFind === 0 || indexToFind === 1){
        return sequence[indexToFind]
    }
    if (indexToFind>1){
        for (i = 2;i <=indexToFind ; i++){
            sequence[i] = sequence[i-1] + sequence[i-2];
        }
        return sequence[indexToFind];
    }
};

// Do not edit below this line
module.exports = fibonacci;
