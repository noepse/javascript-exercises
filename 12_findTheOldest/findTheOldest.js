const findTheOldest = function(arr) {
    return arr.reduce((currentOldest, currentPerson) => {
        const currentOldestAge = calculateAge(currentOldest);
        const currentPersonAge = calculateAge(currentPerson);

        if (currentPersonAge > currentOldestAge){
            currentOldest = currentPerson
        }
        return currentOldest;
    })


    function calculateAge(person){
        if (person.yearOfDeath){
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        else{
            const date = new Date();
            person.age = date.getFullYear() - person.yearOfBirth;
        }
        return person.age
    }
}

// Do not edit below this line
module.exports = findTheOldest;
