var consoleElement = document.getElementById('console'),
	input = document.getElementById('textInput');

function appendToConsole(message) {
	consoleElement.value += message + '\n';
}

function buttonClicked() {
	appendToConsole('Entering button click!');
	input.focus();
	appendToConsole('Leaving button click!');
}

function inputfocus() {
	appendToConsole('Focus ran!');
}