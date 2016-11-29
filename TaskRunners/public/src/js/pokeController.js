angular.module('PokeApp')
	.controller('PokeCtrl', function (PokeSvc, $scope) {
		angular.extend($scope, {
			pokemon: []
		});

		$scope.$on('PokeApp.Scroll', $scope.fetchPokemon );

		$scope.fetchPokemon = function() {
			PokeSvc.getPokemon(function (result) {
				$scope.pokemon.push(result);
			});
		};

        $scope.fetchPokemon();
	});