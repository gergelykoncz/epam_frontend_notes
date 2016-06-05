var myButton = document.getElementById('myButton');
myButton.addEventListener('click', createEvent);

UIEvent.prototype.toShortString = function(){
	var result = 'Event type is: ' + this.type + '\n';
	result += 'Browser event: ' + this.isTrusted;

	return result;
};

function createEvent(e) {
	var customEvent = new UIEvent('totallyCustom', {
		bubbles: true
	});

	customEvent.foo = 'bar';

	e.target.dispatchEvent(customEvent);
}

document.addEventListener('totallyCustom', function (e) {
	console.log(e.foo); //bar
	console.log(e.toShortString());
});