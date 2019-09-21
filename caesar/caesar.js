const caesar = function(input , shift) {
    array = input.split('');
    let shifted = array.map(char => charShift(char, shift));
    console.log(shifted);
    return shifted.join('');
}

const charShift = function(char, shift) {
    let code = char.charCodeAt();
    shift = ((shift % 26) + 26) % 26;
    console.log(shift);
    if (code >= 65 && code <= 90 ) {
        if(code + shift <= 90) {
            code += shift;
        } else code = 65 + (code + shift - 90) - 1;
    } else if (code >= 97 && code <= 122) {
        if (code + shift <= 122) {
            code += shift;
        } else code = 97 + (code + shift - 122) -1;
    }
    return String.fromCharCode(code);
}

module.exports = caesar
