/* In JS, function context is an object, accessible via the this keyword */

//There's a global context, window in the browser or global in NodeJS
console.log(this === window); //true

//There's also a function context
(function functionContext() {
	var obj = {
		myProp: 'howdy',
		write: function () {
			console.log(this.myProp);
		}
	};

	console.log(obj.write()); //howdy, because the write function was called on the obj object. So 'this' became obj.
})();

//Beware, this is kind of fragile
(function overrideContext() {
	var obj = {
		myProp: 'howdy',
		write: function () {
			console.log(this.myProp);
		}
	};

	var writeFunc = obj.write;

	console.log(writeFunc()); //undefined, we are not calling write on obj, but the function itself, in the global scope -- this is now window!
})();

//Context can be overridden if needed
(function overrideContext() {
	var obj = {
		myProp: 'howdy',
		write: function () {
			console.log(this.myProp);
		}
	};

	var otherObj = {myProp: 'nope'};

	console.log(obj.write.call(otherObj)); //nope, this is now refers to otherObj
})();

//Call takes a bunch of parameters - the context, and the parameters one-by-one required for the function call
(function callExample() {
	var redCar = {
		color: 'red',
		accelerate: function (toSpeed, onInterval) {
			console.log('The ' + this.color + ' car is accelerating to ' + toSpeed + 'km/h in ' + onInterval + ' seconds.');
		}
	};

	console.log(redCar.accelerate(120, 10)); //The red car is accelerating to 120km/h in 10 seconds.

	var blueCar = {
		color: 'blue'
	};

	redCar.accelerate.call(blueCar, 80, 20);//The blue car is accelerating to 80km/h in 20 seconds.
})();

//Bind is useful for creating a function with a specified context that needs to be called later
(function bindExample() {
	var remindMeBot = {
		intro: 'Hey, wake up, you asked me to: ',
		remindMeIn: function (seconds, message) {
			window.setTimeout(this.remind.bind(this, message), seconds * 1000); //We set the context to this, to access the intro property. X seconds later we'll see a message!
		},
		remind: function (message) {
			console.log(this.intro + message);
		}
	};

	remindMeBot.remindMeIn(2, 'water the flowers!');
})();