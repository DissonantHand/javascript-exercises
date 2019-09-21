const reverseString = function(string) {
let array = string.split('');
let reversed = [];
for (let i = 0; i<string.length ; i++) {
    reversed.unshift(array[i]);
}
let output = reversed.join('');
return output;
}

module.exports = reverseString
