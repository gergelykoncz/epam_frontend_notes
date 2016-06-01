/* Finish the triangles function
 It has a single parameter, num.
 Return an array that looks like this:

 #
 ##
 ###
 ####
 #####
 ######
 #######
 */

// Hint: you can use an outer variable
// Hint: another approach - Array(3).join('#') -> ##

function triangles(num) {
	var result = [];

	return result;
}

function resultChecker() {
	var arr = triangles(), result = true, pattern = /^(#)\1+$/;
	if(!arr.length){ //Empty arrays don't count!
		result = false;
	}

	arr.forEach(function (item, index) {
		if (item.length !== index + 1 && pattern.test(item)) {//index is zero-based

			result = false;
		}
	});

	if (!result) {
		console.log('Keep working, you\'re not there yet!');
	}
	else {
		console.log('Congrats!');
	}
}

resultChecker();