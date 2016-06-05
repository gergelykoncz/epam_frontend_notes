var consoleElement = document.getElementById('console');
function appendToConsole(message) {
	consoleElement.value += message + '\n';
}

function clickFunction(e) {
	appendToConsole('ClickFunction invoked by: ' + e);
}

document.getElementById('domObject').onclick = clickFunction.bind(this, 'DomObject');
document.getElementById('evListener').addEventListener('click', clickFunction.bind(this, 'EvListener'));