/* We have an array of objects, having a number stored in each of their x properties.
 We'd like to multiply each x number in the array by 10 in a forEach function, using the multiplyByTen function
 Write the multiplyBy function so that it does this.
 Hint: forEach has three parameters: item, index, array
 */

function multiplyBy(number) {
	return function(item){
		item.x *= number;
	}
}

var multiplyByTen = multiplyBy(10);

var items = [
	{x: 1},
	{x: 2},
	{x: 3},
	{x: 4},
	{x: 5},
	{x: 6},
	{x: 7},
	{x: 8},
	{x: 9},
	{x: 10}
];

items.forEach(multiplyByTen);
console.log(items);
console.log(items.map(function (item) {
	return item.x
}));