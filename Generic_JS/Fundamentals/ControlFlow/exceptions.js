/* throw - in JS throw is used to raise an exception
 throw can throw anything, but it's advisory to use the Error type and its descendants */
(function throwBasic() {
	throw new Error(); //Uncaught Error
})();

/*You can include an error message in the Error constructor function*/
(function throwMessage() {
	throw new Error('Something is not right here'); //Uncaught Error: Something is not right here
})();

/*There are also specialized errors which the runtime can throw*/
(function rangeErrorExample() {
	var arr = new Array(-1); //RangeError: Invalid array length
})();

/*Or the very popular TypeError*/
(function typeErrorExample() {
	var x = {};
	x.totallyNotExistingFunction(); //TypeError: x.totallyNotExistingFunction is not a function; (yep, it's undefined)
})();

/*But everything is throwable*/
(function throwaNumber() {
	throw 23; //Uncaught 23
})();

/*In the previous cases, the undhandled error killed our code*/
(function executionStopsOnError() {
	var arr = new Array(-1);
	console.log('Execution never reaches me, this message won\'t be on the console!');
})();

/*There are constructs for recovering. try-catch is used to handle errors*/
(function catchExample() {
	try {
		throw 23;
	}
	catch (e) {
		console.log(e + ' was thrown!'); //23 was thrown!
	}
})();

/*To check what kind of error occurred, you can work with the parameter in the catch block*/
(function catchMultiError() {
	try {
		throw new TypeError('Something something dark side');
	}
	catch (e) {
		if (e instanceof RangeError) {
			console.log('Looks like we have a RangeError folks!');
		}
		else if (e instanceof TypeError) {
			console.log('Looks like we have a TypeError folks!');
		}
	}
})();

/*Finally, there is the finally block which will run after the try and the catch block execute
 It will run regardless of errors */
(function finallyWithError() {
	try {
		throw 'StringyError';
	}
	catch (e) {

	}
	finally {
		console.log('Finally ran!');
	}
})();

/*You can even get away with omitting the catch block and just using try-finally*/
(function finallyWithoutCatch() {
	try {
		throw 2;
	}
	finally {
		console.log('Finally ran!');
	}
})();

/*Finally will run if there's no error*/
(function finallyWithoutError() {
	try {
		//Happy case, no errors here
	}
	finally {
		console.log('Still ran finally!');
	}
})();