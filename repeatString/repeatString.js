const repeatString = function(string, length) {
let output = '';
if (length < 0) {
    return "ERROR"
}
for (let i=0 ; i<length ; i++){
    output += string;
    }
return output;
}

module.exports = repeatString
