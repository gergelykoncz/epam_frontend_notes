describe('PokeCtrl tests', function () {
    var ctrl,
        scope,
        pokeSvc;

   beforeEach(angular.mock.module('PokeApp'));

   beforeEach(inject(function($controller, $rootScope, PokeSvc){
       scope = $rootScope.$new();
       pokeSvc = PokeSvc;

       ctrl = $controller('PokeCtrl', {
           $scope: scope,
           PokeSvc: pokeSvc
       });
   }));

   describe('fetchPokemon function', function () {
      it('should call the correct function on PokeSvc', function () {
          spyOn(pokeSvc, 'getPokemon');
          scope.fetchPokemon();
          expect(pokeSvc.getPokemon).toHaveBeenCalled();
      });
   });
});