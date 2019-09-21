const fibonacci = function(x) {
    let prev1 = 0;
    let prev2 = 1;
    let fibNum = 0
    if (typeof(x) != 'number' && typeof(+x) != 'number' || x < 1) {
        return 'OOPS';
    } else{
        for (let i=1 ; i<x ; i++) {
            fibNum = prev1 + prev2;
            prev1 = prev2;
            prev2 = fibNum;
        }
    }
    return fibNum;
}

module.exports = fibonacci
