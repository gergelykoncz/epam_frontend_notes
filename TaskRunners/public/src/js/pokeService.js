define(['pokemon', 'pokeCache', 'jquery'], function(Pokemon, PokeCache, $){
	var nextUrl,
		pendingHttp = false;

	function _listPokemon(data, cb) {
		data.results.forEach(function (item) {
			var cached = PokeCache.retrieve(item.url);
			if (cached) {
				cb(cached);
			}
			else {
				$.getJSON(item.url, function(result){
					var poke = new Pokemon(result);
					PokeCache.add(item.url, poke);
					cb(poke);
				});
			}
		});
	}

	function _getPokemon(cb) {
		if (pendingHttp) {
			return;
		}
		pendingHttp = true;
		$.getJSON(nextUrl || 'http://pokeapi.co/api/v2/pokemon?limit=20', function(result){
			//Pagination support, the result will contain a new URL for the next batch
			nextUrl = result.next;
			_listPokemon(result, cb);
			pendingHttp = false;
		});
	}

	return {
		getPokemon: _getPokemon
	};
});