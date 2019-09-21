const palindromes = function(string) {
    let cleaned = string.replace(/[^a-zA-Z]/g,'');
    let array = cleaned.toLowerCase().split('');
    let sum = 0;
    for (let i = 0 ; i < array.length ; i++) {
        let j = array.length - i;
        if (array[i] == array[j-1]) {
            sum++;
        }
    }
    return (sum == array.length);
}

module.exports = palindromes