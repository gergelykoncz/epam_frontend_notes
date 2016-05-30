/* instanceof - Checks if an object has the passed-in constructor in its prototypes.
 It's meant to use with Objects, not primitives */

/* A simple example with a single parent*/
(function instaceofTest() {
	function Car(color) {
		this.color = color;
	}

	var myCar = new Car('blue');

	console.log(myCar instanceof Car); //true; because myCar.constructor === Car
})();

/* Arrays are of type Array*/
(function instanceofArray() {
	console.log([1, 2, 3] instanceof Array); //true
	console.log([1, 2, 3] instanceof Object); //true
})();