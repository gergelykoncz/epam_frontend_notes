/* Write a function that removes duplicates from an array, using the Array.prototype.filter function */
/* So that [1,1,1,2,3,3,2,3,4,4] => [1,2,3,4] (order is unimportant)
 /* It should work on all data types */

function uniquify(arr) {
	return arr.filter(function (item, index) {
		return arr.indexOf(item) === index;
	});
}

console.log(uniquify([1,1,1,2,3,3,2,3,4,4]));