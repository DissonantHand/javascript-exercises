let getAge = function (birthDate, deathDate) {
    if (!deathDate) {
        deathDate = new Date().getFullYear();
    }
    return deathDate - birthDate;
}

let findTheOldest = function(array) {
    let sorted = array.sort(function (a, b)
    {
        let age1 = getAge (a.yearOfBirth , a.yearOfDeath);
        let age2 = getAge (b.yearOfBirth , b.yearOfDeath);
        return age1 > age2 ? -1 : 1;
    })
    console.table(sorted);
    console.log(sorted[0].name);
    return sorted[0];
}

module.exports = findTheOldest
