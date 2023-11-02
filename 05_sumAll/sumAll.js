const sumAll = function(a, b) {
    if (!(a>0 && b>0 && typeof a === 'number' && typeof b === 'number')){
        return 'ERROR'
    }

   else{

    let sum = 0;

    if (b<a){
        for (let i = b; i <= a; i++){
            sum += i;
        }
    }

    else {
        for (let i = a; i <= b; i++){
            sum += i;
        }
    }

 return sum;

   }



};

// Do not edit below this line
module.exports = sumAll;
