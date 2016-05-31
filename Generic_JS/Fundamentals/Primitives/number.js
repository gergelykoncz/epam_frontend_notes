/* JavaScript only has one number type (although it can have more formats internally)
 These numbers are 64-bit floating point */

(function numberDefinitions() {
	var n1 = 100; //100
	var n2 = 3.14; //3.14
	var n3 = 123e4; //1230000
	var hex = 0xFF; //255
})();

/*parseInt is used to convert a string to a signed integer*/
/*parseFloat is used to convert a string to a signed float*/
(function parseIntExamples() {
	console.log(parseInt('128')); //128

	//It has an optional second parameter, to denote which base you'd like to use to the conversion. The default is base 10
	console.log(parseInt('10', 2)); //2
	console.log(parseInt('128', 16)); //296

	//If it encounters a floating point number, it'll parse it as an integer.
	//Use parseFloat if you need floating point numbers
	console.log(parseInt('3.14')); //3

	//It'll parse numbers until a non-numeric character is found, and then returns the result
	console.log(parseInt('800 000')); //800

	//An exception is the - and + sign
	console.log(parseInt('-800')); //-800
	console.log(parseInt('+800')); //800

	//If the string doesn't start with a number or +/-, NaN is returned.
	//Whitespace is acceptable as a starting character as well
	console.log(parseInt('a1')); //NaN

	//parseFloat works in exactly the same way, but will parse to a floating point number
	console.log(parseFloat('1.23')); //1.23
})();

/*There are some type corection rules between strings and numbers*/
(function corection() {
	//Adding a string and number together will result in a string
	console.log('1' + 1); //'11'
	console.log(1 + '1'); //'11'

	//It can become really funny
	console.log(1 + 1 + '1'); //'21
	console.log('1' + 1 + 1); //'111'

	//Subtracting is easier, it'll result in a number
	console.log('21' - 1); //20

	//Parse your string to evade these problems
})();