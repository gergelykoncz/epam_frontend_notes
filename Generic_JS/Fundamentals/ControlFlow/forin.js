/*With the for-in loop we can iterate over an object's every enumerable property*/
(function basicForIn() {
	var x = {
		a: 1,
		b: 2,
		c: 3
	};

	for (var key in x) {
		console.log(x[key]); //1, 2, 3
	}
})();

/*By default for-in will go through all inherited members as well
 This could result in some surprises */
(function forinProblem() {
	var x = {
		a: 1,
		b: 2,
		c: 3,
		writeToConsole: function () {
		}
	};

	for (var key in x) {
		console.log(x[key]); //1, 2, 3, function(){}
	}
})();

/*You could use Object.defineProperty to code around this*/
(function forinDefineProperty() {
	var x = {
		a: 1,
		b: 2,
		c: 3
	};
	Object.defineProperty(x, 'writeToConsole', {
		enumerable: false,
		value: function () {
		}
	});

	for (var key in x) {
		console.log(x[key]); //1, 2, 3
	}
})();

/*By default for-in will iterate over inherited properties/functions as well.
 This is a case I encountered in the wild */
(function letsExtendArrayPrototypeItWillBeFun() {
	Array.prototype.lookAtMyMethod = function () {
		console.log('Just look at it!');
	};

	var x = [1, 2, 3];
	for (var key in x) {
		console.log(x[key]); //1, 2, 3, function(...)
	}
})();

/*To evade these problems simply not extend built-in prototypes this way.
 Of course you can code around this with using hasOwnProperty. */
(function hasOwnPropertyDemo() {
	Array.prototype.lookAtMyMethod = function () {
		console.log('Just look at it!');
	};

	var x = [1, 2, 3];
	for (var key in x) {
		if (x.hasOwnProperty(key)) {
			console.log(x[key]); //1, 2, 3
		}
	}
})();
