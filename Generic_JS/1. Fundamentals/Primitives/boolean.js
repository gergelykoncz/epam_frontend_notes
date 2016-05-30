/* Boolean is a logical data type that can be either true or false */

(function primitiveBoolean() {
	var x = true;
	console.log(x); //true
	console.log(typeof x); //boolean
})();


/*You can quickly convert anything to a Boolean value by using the ! operator twice */
(function convertToBoolean() {
	var x = 'hello';
	var y = !!x;
	console.log(y); //true; string is truthy
	console.log(typeof y);//boolean
})();

/* Certain primitive types (boolean, number, string and symbol) have wrapper functions */
(function boolWrapper() {
	var x = new Boolean(false); //beware, the engine a temporary object now!
	console.log(x); //true; the object is truthy
	console.log(typeof x); //object; such fun!

	//If you're resorting to primitive wrappers, use the valueOf() function to get the underlying value
	console.log(x.valueOf()); //false
})();

/*There are a bunch of logical operators on bools*/
(function logicalOperators(){
	var t = true,
		f = false;

	console.log(t || f); //true, || is the OR operator
	console.log(t && f); //false, && is the AND operator
	console.log(!t); //false, ! is the NOT operator
})();