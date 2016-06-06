//This is how inheritance needs to be done!
(function () {
	function Person(name) {
		this.name = name;
		console.log('in proto')
	}

	Person.prototype.getName = function () {
		return this.name;
	};


	function Girl(name) {
		Person.call(this, name);
		this.traits = {};
	}

	Girl.prototype = Object.create(Person.prototype);
	Girl.prototype.constructor = Girl;

	var girl = new Girl('Sarah');

	console.log(girl);
})();

//Check some internal stuff here:
(function(){
	function Person(name) {
		this.name = name;
		console.log('in proto')
	}

	Person.prototype.getName = function () {
		return this.name;
	};


	function Girl(name) {
		Person.call(this, name);
		this.traits = {};
	}

	Girl.prototype = Object.create(Person.prototype);
	Girl.prototype.constructor = Girl;

	var girl = new Girl('Sarah');

	console.log(girl.__proto__ === girl.constructor.prototype);
})();

