/*There are different ways to create objects in JS*/

//Using the object literal
(function literal() {
	var x = {
		bob: 23, //adding a property
		do: function () {
		} //adding a method
	};

	//Objects can be extended by . notation
	x.gon = 'give it to ya';

	//Or bracket notation
	x['foo'] = 'bar';

	//Not existing keys have the value of undefined
	console.log(x.notExisting); //undefined
})();

/* Using the object constructor */
(function objConstructor() {
	var x = new Object();
	x.foo = 'bar';
})();

/* Using another constructor */
(function (global) {
	function Car(color) {
		this.color = color;
	}

	var x = new Car('red');
	console.log(x); //Car {color: 'red'}

	//But don't omit new
	var y = Car('red');
	console.log(y); //undefined
	console.log(global.color); //red
})(window);

/* Object.create */
(function create() {
	var car = {
		display: function () {
			return 'Look at my car, it\'s ' + this.color + '!';
		}
	};

	var myCar = Object.create(car);
	myCar.color = 'blue';
	console.log(myCar.display()); //Look at my car, it's blue
})();

/* Defining getters and setters */
(function gettersSetters() {
	var x = {
		_foo: 'bar',
		get foo() {
			return this._foo;
		},
		set foo(val) {
			this._foo = val;
		}
	};

	console.log(x.foo); //bar
	x.foo = 'nope';
	console.log(x.foo); //nope
})();

/* writable property descriptor */
(function defineWritable() {
	var x = {};
	Object.defineProperty(x, 'bob', {
		writable: false, //Setting writable to false prevents deletion, and prevents assigning new values
		value: '1'
	});

	console.log(delete x.bob); //false
	x.bob = 123;
	console.log(x.bob)
})();

/* configurable property descriptor
 * configurable properties can have additional properties defined dynamically */
(function defineConfigurable() {
	var x = {};
	Object.defineProperty(x, 'bob', {
		configurable: false,
		writable: true,//Setting configurable to false
		value: '1'
	});

	x.bob = 123;
	console.log(x.bob)
})();
