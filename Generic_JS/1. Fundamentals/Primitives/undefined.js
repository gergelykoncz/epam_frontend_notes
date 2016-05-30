/* undefined is a property on the global object with the type undefined.
 It denotes the lack of a value.
 Declared variables but not assigned variables have the undefined value. */
(function declaredUndefined() {
	var x;
	console.log(x); //undefined, x has no value assigned to it.

	console.log(x === window.undefined); //true; there's only one instance of undefined, and it's declared on the global object
})();

/* If you don't pass named arguments to the function, they'll have the undefined
 value inside of the function
 */
(function missingParams() {
	function example(x, y) {
		console.log(x); //'hello', since we passed a value for x below
		console.log(y); //undefined, we didn't pass anything for y
	}

	example('hello');
})();

/* A function without a return value will return undefined as well */
(function noReturnStatement() {
	function example() {
		var x = 3;
		//Notice the lack of a return statement
	}

	console.log(example()); //undefined, since the example function doesn't return a value
})();

/* Undefined is not the same thing as null
 Null values are explicitly assigned by the developer, while undefined is used implicitly (mostly)*/
(function undefinedIsNotNull() {
	var x; //x is undefined here
	var y = null; //null is explicitly assigned to y here.

	console.log(x === y); //false; undefined is not equal to null (see what null is in null.js)
	console.log(x == y); //true; type coercion happens here
})();

/*Typeof undefined will be undefined
 Using the typeof operator */
(function typeofUndefined() {
	var x;
	console.log(typeof x); //undefined
})();

/*If the variable is not declared its value won't be undefined.
 It'll simply throw an error. */
(function referenceErrorWhenNotExists() {
	console.log(x); //Uncaught ReferenceError: x is not defined
})();