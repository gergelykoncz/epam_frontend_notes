angular.module('PokeApp')
	.controller('PokeCtrl', function (PokeSvc, $scope) {
		angular.extend($scope, {
			pokemon: []
		});

		$scope.$on('PokeApp.Scroll', _fetchPokemon);

		function _fetchPokemon() {
			PokeSvc.getPokemon(function (result) {
				$scope.pokemon.push(result);
			});
		}

		_fetchPokemon();
	});