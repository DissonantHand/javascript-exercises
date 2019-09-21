const leapYears = function(x) {
if (x%4 != 0) {
    return false;
} else if (x%400 != 0 && x%100 == 0) {
    return false;
} else {
    return true}
}

module.exports = leapYears
