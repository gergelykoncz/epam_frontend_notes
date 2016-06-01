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

(function instanceofComplicated() {
	function Mammal() {

	}

	function Feline() {

	}

	Feline.prototype = Object.create(Mammal.prototype);
	Feline.prototype.constructor = Feline;

	function HouseCat() {

	}

	HouseCat.prototype = Object.create(Feline.prototype);
	HouseCat.prototype.constructor = HouseCat;

	function Lion() {

	}

	Lion.prototype = Object.create(Feline.prototype);
	Lion.prototype.constructor = Lion;

	console.log('Lion is a mammal: ', new Lion() instanceof Mammal); //true
	console.log('Lion is a feline: ', new Lion() instanceof Feline); //true

	console.log('HouseCat is a mammal: ', new HouseCat() instanceof Mammal); //true
	console.log('HouseCat is a feline: ', new HouseCat() instanceof Feline); //true

	console.log('HouseCat is a lion: ', new HouseCat() instanceof Lion); //false
	console.log('Mammals are lions: ', new Mammal() instanceof Lion); //false

	//Everyone extends Object, but this can be overwritten. See next example
	console.log('HouseCat is an object: ', new HouseCat() instanceof Object); //true
})();

/*By using Object.create(null) you can get rid of the object prototype in the chain*/
(function youCanOverwriteExtendingObject() {
	function Mammal() {

	}

	Mammal.prototype = Object.create(null);

	function Feline() {

	}

	Feline.prototype = Object.create(Mammal.prototype);
	Feline.prototype.constructor = Feline;

	console.log('Mammal is an Object: ', new Mammal() instanceof Object); //false
	console.log('Feline is a Mammal: ', new Feline() instanceof Mammal); //true
	console.log('Feline is an Object: ', new Feline() instanceof Object); //false
})();

(function howsInstanceOfWorks() {
	function instance_of(V, F) {
		var O = F.prototype;
		V = V.__proto__;
		while (true) {
			if (V === null)
				return false;
			if (O === V)
				return true;
			V = V.__proto__;
		}
	}

	//See this link on how it works: http://i.imgur.com/IkxPv.png
})();

/* Arrays are of type Array*/
(function instanceofArray() {
	console.log([1, 2, 3] instanceof Array); //true
	console.log([1, 2, 3] instanceof Object); //true
})();