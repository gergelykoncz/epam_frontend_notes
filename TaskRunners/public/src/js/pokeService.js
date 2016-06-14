angular.module('PokeApp')
	.service('PokeSvc', function ($http, PokeCache) {
		var nextUrl,
			pendingHttp = false;

		function _listPokemon(data, cb) {
			data.results.forEach(function (item) {
				var cached = PokeCache.retrieve(item.url);
				if (cached) {
					cb(cached);
				}
				else {
					$http({
						method: 'GET',
						url: item.url
					}).success(function (result) {
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
			$http({
				method: 'GET',
				url: nextUrl || 'http://pokeapi.co/api/v2/pokemon?limit=20'
			}).success(function (result) {
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