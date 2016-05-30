/* null represents an intentional absence of a value.
 Usually you as the programmer will pass it around,
 which is a common difference with undefined*/

/*There's a bug in ECMAScript, typeof will return object for null.*/
(function typeofBug() {
	console.log(typeof null); //object, but it's supposed to be null. This is a bug.
})();