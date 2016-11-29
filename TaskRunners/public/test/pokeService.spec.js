describe('PokeSvc tests', function () {
    var pokeSvc;

    beforeEach(angular.mock.module('PokeApp'));

    beforeEach(inject(function(PokeSvc){
        pokeSvc = PokeSvc;
    }));

    describe('getPokemon function', function () {
        xit('should call the correct function on PokeSvc', inject(function ($httpBackend) {
            $httpBackend.when('GET', 'http://pokeapi.co/api/v2/pokemon?limit=20')
                .respond(200, {
                    results: []
                });

            var spy = jasmine.createSpy();

            pokeSvc.getPokemon(spy);
            expect(spy).toHaveBeenCalled();
        }));
    });
});