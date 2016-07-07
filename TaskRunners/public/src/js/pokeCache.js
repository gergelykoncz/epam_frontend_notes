define(["pokemon"], function (Pokemon) {

	function _add(url, pokemon) {
		localStorage.setItem(url, JSON.stringify(pokemon));
	}

	function _retrieve(url) {
		var result = localStorage.getItem(url);
		if (!result) {
			return null;
		}
		else {
			var poke = JSON.parse(result);
			/*jshint proto:true */
			poke.__proto__ = Pokemon.prototype;
			return poke;
		}
	}

	return {
		add: _add,
		retrieve: _retrieve
	};
});