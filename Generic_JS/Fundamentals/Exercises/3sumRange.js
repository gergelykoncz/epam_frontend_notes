/* Write two functions:
 A range function that has two parameters: from and to, returning an array of numbers between the two params, inclusive.
 So range(1, 10) should result in: [1,2,3,4,5,6,7,8,9,10].

 A sum function, which has a single parameter: arr, an array of numbers
 Return the sum of these numbers

 As a bonus, chain these two functions, so that sum(range(1,2)) === 3
 */

function range(from, to) {
	var result = [];
	for (var i = from; i <= to; i++) {
		result.push(i);
	}
	return result;
}

function sum(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

console.log(range(1, 3));
console.log(sum(range(1, 3)));