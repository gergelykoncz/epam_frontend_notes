/* strict mode is a way to opt in to a restricted variant of JS
 it is defined on the function level*/

/*In strict mode, you cannot create global variables by omitting the var keyword*/
(function accidentallyGlobal() {
	'use strict';//strict mode
	myVar = 13; //Uncaught ReferenceError: myVar is not defined
})();

/*Assinging to non-writable variables will throw an error in strict mode*/
(function assignmentErrors() {
	'use strict';
	//Extending a readonly variable
	try {
		NaN.x = 'hello'; //Uncaught TypeError: Cannot create property 'x' on number 'NaN'
	}
	catch (e) {

	}

	//Assignment to a non-writable property
	try {
		var x = {};
		Object.defineProperty(x, 'hello', {
			value: 'world',
			writable: false
		});
		x.hello = 'nope'; //Uncaught TypeError: Cannot assign to read only property 'hello' of object '#<Object>'
	}
	catch (e) {

	}

	//Assigning to a getter only property
	try {
		var y = {
			get world() {
				return 'hello';
			}
		};
		y.world = 'nope'; //Uncaught TypeError: Cannot set property world of #<Object> which has only a getter

	}
	catch (e) {

	}
})();

/*Deleting non-deletable properties will throw an error in strict mode*/
/*In strict-mode, an unsuccessful delete will throw an exception*/
(function deleteUnWritableStrictMode() {
	'use strict';

	var x = {};
	Object.defineProperty(x, 'hello', {
		value: 'world',
		writable: false
	});

	console.log(x.hello); //world

	delete x.hello; //Uncaught TypeError: Cannot delete property 'hello' of Object
})();

/*In strict mode, parameters name must be unique*/
(function nonUniuqeParamNames() {
	'use strict';
	function hello(x, x) { //Uncaught SyntaxError: Duplicate parameter name not allowed in this context

	}
})();