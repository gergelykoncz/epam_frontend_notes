/* You have a function crappyAdd that adds two numbers, but fails randomly half of the time and throws an error
 Write a wrapper that retries the addition (by calling crappyAdd until it succeeds)

 Hint: check for RandomFailureError in the catch block, other errors should still fail!
 Hint: loops can help you here!
 Hint: you can use break to break out from a loop!
 */

function RandomFailureError() {

}

function crappyAdd(a, b) {
	if (Math.random() < .5) {
		return a + b;
	}
	else {
		throw new RandomFailureError();
	}
}

function coolAdd(a, b) {
	while (true) {
		try {
			var result = crappyAdd(a, b);
			return result;
		}
		catch (e) {
			if (e instanceof RandomFailureError === false) {
				throw e;
			}
		}
	}
}

console.log(coolAdd(1, 1));