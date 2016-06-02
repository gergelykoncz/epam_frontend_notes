/* We love functional-style forEach, but sadly, the arguments object doesn't have it.
 Convert it to an array so that we can iterate over it!
 */

function listParameters() {
	var argumentsAsArray = arguments;

	argumentsAsArray.forEach(function (item) {
		console.log(item);
	});
}

console.log(listParameters('a', 'b', 'c', 1, 2, 3));