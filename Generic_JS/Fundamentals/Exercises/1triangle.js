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

var curr = '#';
for (var i = 0; i < 6; i++) {
	console.log(curr);
	curr += '#';
}