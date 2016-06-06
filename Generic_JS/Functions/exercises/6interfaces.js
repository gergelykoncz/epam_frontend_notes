/* We have an array of primitives (numbers).
 We'd like to multiply each number in the array by 10 in a forEach function, using the multiplyByTen function
 Write the multiplyBy function so that it does this.
 Hint: primitives are passed by value.
 Hint: forEach has three parameters: item, index, array.
 */

function multiplyBy(number) {
	return function (item, index, array) {
		array[index] = item * number;
	}
}

var multiplyByTen = multiplyBy(10);

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
items.forEach(multiplyByTen);
console.log(items);