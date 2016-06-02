/* Variables defined in outer functions can be accessed in inner functions
 The reverse is not true!
 */

(function scopeChainExample(){
	var globalX = 'global';
	(function outer(){
		var outerX = 'outer';
		console.log(globalX); //global

		(function middle(){
			var middleX = 'middle';
			console.log(outerX); //outer

			(function inner(){
				var innerX = 'inner';
				console.log(middleX); //middle
				console.log(innerX); //inner
			})();
		})();
	})();
})();