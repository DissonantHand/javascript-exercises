const sumAll = function(a, b) {
if ((typeof(a) == 'number') && (a >=0) && (typeof(b) == 'number') && (b >= 0)){
let big = Math.floor(Math.max(a,b));
let small = Math.ceil(Math.min(a,b));
let sum = 0;
for (let i = small ; i <= big ; i++) {
    sum += i;
}
return sum;
} else {
    return "ERROR";
}
}

module.exports = sumAll
