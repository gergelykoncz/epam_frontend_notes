/* string is a primitive, while String is an object wrapper around it.
 When working with strings, invoked functions on the primitive will automatically
 create an object wrapper, thus making it work.
 */

/*String can be concatenated with the '+' operator */
(function concatenateStrings() {
	var str = 'hello' + ' world';
	console.log(str); //hello world

	//strings are also indexable (0-indexed)
	console.log(str[6]); //w
})();

/*Strings are immutable. Modifying a string is not possible, only creating new ones is*/
(function immutableString() {
	var str = 'hello world';
	str[1] = 'a';

	console.log(str); //hello world
})();

/*Actually in strict mode trying to modify a string is an error*/
(function immutableString() {
	'use strict';
	var str = 'hello world';
	str[1] = 'a'; //Uncaught TypeError: Cannot assign to read only property '1' of string 'hello world'
})();

/*Some functions/properties on string*/
(function stringDemo() {
	var str = 'hello world';
	console.log(str.length);//11

	console.log(str.toUpperCase());//HELLO WORLD
	//But since strings are immutable, the contents of str did not change!!!
	//toUpperCase created and returned a new string
	console.log(str);//hello world
	//However the variable can be changed, so it's entirely valid to do this:
	str = str.toUpperCase();
	console.log(str);//HELLO WORLD

	//With indexOf, you can return the first index of a char occurrence
	console.log(str.indexOf('W')); //6
	//If the given character cannot be found, it'll return -1
	console.log(str.indexOf('A')); //-1
	//If there are multiple chars, it returns the index of the first
	console.log(str.indexOf('L')); //2
})();