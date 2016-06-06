/* Write a program to print all numbers from 1 to a 100, with the following exceptions:
 - If a number is divisible by 3, print "Fizz" instead
 - If a number is divisible by 5, but not 3, print "Buzz" instead
 - If a number is divisible by both 3 and 5, print "FizzBuzz" instead
 */

//Hint: you can use the modulo operator: % to check for divisions

for (var i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizBuzz');
	}
	else if (i % 3 === 0) {
		console.log('Fizz');
	}
	else if (i % 5 === 0) {
		console.log('Buzz');
	}
	else {
		console.log(i);
	}
}