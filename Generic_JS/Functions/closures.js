/* A closure is the local variable for a function - kept alive after the function has returned */

(function closureExample() {
	function sayHello(name) {
		var text = 'Hello ' + name;
		var say = function () {
			console.log(text);
		};
		say();
	}
	console.log(sayHello('Bob')); //Hello Bob
})();