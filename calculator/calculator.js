function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (array) {
	 return array.reduce((total, num) => {
		return total + num;
	} , 0)
}

function multiply (input) {
	let total = 1;
	for (let i = 0 ; i< input.length ; i++) {
		total *= input[i];
	}
	return total;
}

function power(a, b) {
	return Math.pow(a,b);
}

function factorial(x) {
	let total = 1;
	for (i = 0 ; i < x ; i++) {
		total *= (x-i);
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}