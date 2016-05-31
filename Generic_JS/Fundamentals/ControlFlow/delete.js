/*The delete operator removes a property from an object,
 like it never existed */
(function deleteExample() {
	var x = {
		hello: 'world'
	};

	console.log(x.hello); //world

	var result = delete x.hello;
	console.log(result); //true; delete will return true if the operation succeeded

	console.log(x.hello); //undefined
})();

/*You can also use the accessor syntax for delete*/
(function deleteExample2() {
	var x = {
		hello: 'world'
	};

	console.log(x.hello); //world

	var result = delete x['hello'];
	console.log(result); //true; delete will return true if the operation succeeded

	console.log(x.hello); //undefined
})();


/*You can make properties unremovable using Object.defineProperty*/
(function deleteUnWritableProperty() {
	var x = {};
	Object.defineProperty(x, 'hello', {
		value: 'world',
		writable: false
	});

	console.log(x.hello); //world

	var result = delete x.hello;
	console.log(result); //false, the property could not be deleted
	console.log(x.hello); //world
})();

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