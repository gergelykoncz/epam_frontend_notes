/* Compare two objects using deep comparison (each property should have the same values)
 Hint: use the typeof operator to determine types.
 Hint: for..in comes handy here!
 Hint: you can use recursion to make the code more compact
 Hint: beware of typeof null === 'object'!
 */

function deepEquals(a, b) {
	function compare(a, b) {
		var key, result = true;
		for (key in a) {
			if (a.hasOwnProperty(key)) {
				if (typeof a[key] === 'object' && a[key] !== null) {
					result = deepEquals(a[key], b[key]);
				}
				else if (a[key] !== b[key]) {
					result = false;
					break;
				}
			}
		}
		return result;
	}

	return compare(a, b) && compare(b, a);
}

var sampleObject = {
	0: 1,
	length: 100,
	list: [23, 45, 56, 78],
	userName: "John Smith",
	props: {
		type: "simple",
		id: 1234
	}
};

var sampleObject2 = {
	0: 1,
	length: 100,
	list: [23, 45, 56, 78],
	userName: "John Smith",
	props: {
		type: "simple",
		id: 1234
	}
};

console.log(deepEquals(sampleObject, sampleObject2));