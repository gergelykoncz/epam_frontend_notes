/* switch evaluates an expression and tries to match the result with a label
 with strict equality comparison */

/* Basic example */
(function basicSwitch() {
	var x = 'a';

	switch (x) {
		case 'b':
			console.log('x is b');
			break;
		case 'a':
			console.log('x is a');
			break;
	}
	//Will log 'x is a', obviously.
})();

/* Default label */
(function defaultSwitch() {
	var x = 'z';

	switch (x) {
		case 'b':
			console.log('x is b');
			break;
		case 'a':
			console.log('x is a');
			break;
		default:
			console.log('No match for x');
	}
//Will log 'No match for x', because it only matched with the default case
})();

/* Falling through
 if you omit the break statement from one of the cases, it'll fall through the to next one
 if there's a match */
(function badFallExample() {
	var x = 'z';

	switch (x) {
		case 'z':
			console.log('x is z');
		case 'a':
			console.log('x is a');
			break;
	}
//Will log 'x is z x is a'
})();

/* This is useful if you've 'catch cases' */
(function goodFallExample() {
	var x = 'z';

	switch (x) {
		case 'z':
		case 'y':
		case 'x':
			console.log('x is near the end of the alphabet');
			break;
		case 'a':
		case 'b':
		case 'c':
			console.log('x is near the beginning of the alphabet');
			break;
		//Will log 'x is near the end of the alphabet'
	}
})();