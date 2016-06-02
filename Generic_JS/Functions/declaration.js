/* Functions can be either Function Declaration or Function Expression
 Here we're dealing with declarations
 */

//Function declarations, just like variables are hoisted
(function declarationsAreHoisted() {
	console.log(hello('world')); //prints 'hello world'

	function hello(to) {
		console.log('hello ', to);
	}
})();

//It is illegal to put function declarations into e.g. conditions
//Use function expressions for this purpose
(function dontPutThemInIfs() {
	'use strict';
	console.log(hello('world')); //Uncaught TypeError

	if(true) {
		function hello(to) {
			console.log('hello ', to);
		}
	}
})();

//They have an implicit arguments array-like object for all parameters
(function argumentsExample(){
	function hello(){
		console.log(arguments); //[world, 2]
	}

	hello('world', 2);
})();

//Arguments is not a real array
//To convert it use apply
(function convertArguments(){
	function hello(){
		console.log(arguments.forEach); //undefined
		var convertedArgs = Array.apply(null, arguments);
		console.log(new Array(arguments))
		console.log(convertedArgs)
		console.log(convertedArgs.forEach); //function
	}



	hello('world', 2);
})();