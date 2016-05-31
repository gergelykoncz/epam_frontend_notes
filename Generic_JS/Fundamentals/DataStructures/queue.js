/* queue is a FIFO data structure
 * It's really easy to implement in JS with an array */
(function arrayQueue() {
	function Queue(items) {
		if (!items instanceof Array) {
			throw new TypeError('Expected Array for initializing the queue!');
		}
		this.items = items;
	}

	Queue.prototype.dequeue = function () {
		return Array.prototype.pop.call(this.items, null);
	};

	Queue.prototype.enqueue = function (item) {
		return Array.prototype.unshift.call(this.items, item);
	};

	Queue.prototype.peek = function () {
		var lastIndex = this.items.length - 1;
		if (lastIndex > -1) {
			return this.items[lastIndex];
		}
	};

	Queue.prototype.toString = function () {
		return this.items.join(',');
	};

	var queue = new Queue([1, 2, 3, 4, 5]);

	queue.enqueue(6);
	console.log(queue.toString()); //[6,1,2,3,4,5]
	queue.dequeue();
	console.log(queue.toString()); //[6,1,2,3,4]

	console.log(queue.peek()); //4
})();
