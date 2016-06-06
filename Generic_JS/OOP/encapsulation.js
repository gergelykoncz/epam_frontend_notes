//private method
(function () {
	function Person(name) {
		this.name = name;
		function introduce() { // <-- introduce is not reachable from the outside. Warning! "this" is not the Person object here!
			console.log(this); // <-- will output the global object!
			return 'Hello, I am ' + name + '!';
		}

		this.sayHi = function () {
			console.log(introduce());
		}
	}
})();

var p = new Person('Bob');
p.sayHi();

//public method available on all instances
(function () {
	function Person(name) {
		this.name = name;
	}

	Person.prototype.sayHi = function () {
		console.log('Hello, I am ' + this.name + '!'); //<-- "this" is set to the instance, as expected
	};

	var p = new Person('Bob');
	p.sayHi();
})();
