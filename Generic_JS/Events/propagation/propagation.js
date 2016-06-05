/* JS events travel in two directions.
 If an event is using the bubbling model, then it will be processed by the innermost event handler first, then travels upwards.
 If an event is using the capturing model, then it will be processed by the outermost event handler first, then travels downwards.
 */

var consoleElement = document.getElementById('console');
function appendToConsole(message) {
	consoleElement.value += message + '\n';
}

(function eventBubbling() {
	function formEventHandler(e) {
		appendToConsole('Form event handler invoked by:' + e.target);

	}

	function submitEventHandler(e) {
		appendToConsole('Submit event handler invoked by:' + e.target);

		e.preventDefault(); //prevent form submit here
	}

	var form = document.getElementById('bubblingForm'),
		submit = document.getElementById('bubblingSubmit');

	form.addEventListener('click', formEventHandler);
	submit.addEventListener('click', submitEventHandler);
})();

(function eventCapturing() {
	function formEventHandler(e) {
		appendToConsole('Form event handler invoked by:' + e.target);

	}

	function submitEventHandler(e) {
		appendToConsole('Submit event handler invoked by:' + e.target);

		e.preventDefault(); //prevent form submit here
	}

	var form = document.getElementById('capturingForm'),
		submit = document.getElementById('capturingSubmit');

	form.addEventListener('click', formEventHandler, true);
	submit.addEventListener('click', submitEventHandler, true); //by setting the 3rd parameter of addEventListener, we can listen to event capturing
})();