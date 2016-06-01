/* typeof - returns a string of the type of the operand*/

/* Possible return values */
(function typeofPrimitives() {
	console.log(typeof undefined); // 'undefined'
	console.log(typeof null); // 'object'; this is an error in the spec
	console.log(typeof true); // 'boolean'
	console.log(typeof 1); // 'number'
	console.log(typeof 3.14); // 'number'
	console.log(typeof NaN); // 'number'
	console.log(typeof Infinity); // 'number'
	console.log(typeof 'hello world'); // 'string'
	console.log(typeof {}); // 'object'
	console.log(typeof /s/); // 'object'; regex
	console.log(typeof function () {
	}); // 'function'
	console.log(typeof [1, 2, 3]);//object
})();

/* Primitive wrapper examples */
(function primitiveWrappers() {
	console.log(typeof Boolean(true)); //boolean, wrapper is not invoked with new
	console.log(typeof new Boolean(true)); //object, wrapper is invoked with new
	console.log(typeof Number(NaN)); //number, wrapper is not invoked with new
	console.log(typeof new Number(NaN)); //object, wrapper is invoked with new
	console.log(typeof String('123')); //string, wrapper is not invoked with new
	console.log(typeof new String('123')); //object, wrapper is invoked with new
})();

/* function fun */
(function typeofFunctions() {
	console.log(typeof function () {
	}); //'function'
	console.log(typeof Function()); //'function'
	console.log(typeof new Function()); //'function

	//functions can have properties, but typeof ALWAYS returns function for them
	var myFunc = function () {
	};
	myFunc.subFunc = function () {
	};
	myFunc.bob = 23;

	console.log(typeof myFunc); //'function'
})();