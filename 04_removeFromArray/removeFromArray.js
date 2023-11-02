const removeFromArray = function(arr, ...args) {
    
    const filteredArr = [];

    for (item of arr){
        if (!args.includes(item)){
            filteredArr.push(item);
        }
    }

    return filteredArr;

}

// Do not edit below this line
module.exports = removeFromArray;
