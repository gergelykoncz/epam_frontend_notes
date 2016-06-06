/* Write a function that uses array's reduce function to sum all of its items */
/* The interface of Array.prototype.reduce is  => reduce(previousValue, currentValue, currentIndex, array)*/

function sum(arr) {
	return arr.reduce(function (prev, curr) {
		return prev + curr;
	});
}

console.log(sum([1,2,3]));