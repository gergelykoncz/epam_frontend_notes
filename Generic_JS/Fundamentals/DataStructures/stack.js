/* stack is a LIFO data structure, used extensively
 * It's really easy to implement in JS with an array */
(function arrayStack() {
	function Stack(items) {
		if (!items instanceof Array) {
			throw new TypeError('Expected Array for initializing the stack!');
		}
		this.items = items;
	}

	Stack.prototype.pop = function () {
		return Array.prototype.pop.call(this.items, null);
	};

	Stack.prototype.push = function (item) {
		return Array.prototype.push.call(this.items, item);
	};

	Stack.prototype.peek = function () {
		var lastIndex = this.items.length - 1;
		if (lastIndex > -1) {
			return this.items[lastIndex];
		}
	};

	Stack.prototype.toString = function () {
		return this.items.join(',');
	};

	var stack = new Stack([1, 2, 3, 4, 5]);

	stack.push(6);
	console.log(stack.toString()); //[1,2,3,4,5,6]
	stack.pop();
	console.log(stack.toString()); //[1,2,3,4,5]

	console.log(stack.peek()); //5
})();
