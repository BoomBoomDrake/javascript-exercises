const findTheOldest = function(people) {
    let oldest = people[0];

    for (let i = 1; i < people.length; i++) {
        if (calcAge(oldest) < calcAge(people[i])) {
            oldest = people[i];
        }
    }

    return oldest;
};

function calcAge(obj) {
    if (!(obj.yearOfDeath)) {
        let year = new Date().getFullYear();
        return year - obj.yearOfBirth;
    }

    return obj.yearOfDeath - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
