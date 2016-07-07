define(['pokemon'], function (Pokemon) {

	describe('Pokemon class tests', function () {
		var rawData = {
			id: 1,
			name: 'balbasaur',
			sprites: {
				front_default: 'balbasaur.png'
			},
			types: [
				{
					type: {
						name: 'plant'
					}
				},
				{
					type: {
						name: 'poison'
					}
				}
			],
			moves: [
				{
					move: {
						name: 'cut'
					}
				},
				{
					move: {
						name: 'leer'
					}
				}
			]
		};

		it('should initialize a new object based on the parameters', function () {
			var balbasaur = new Pokemon(rawData);
			expect(balbasaur.id).toEqual(1);
			expect(balbasaur.name).toEqual('balbasaur');
			expect(balbasaur.image).toEqual('balbasaur.png');
			expect(balbasaur.type[0]).toEqual('plant');
			expect(balbasaur.type[1]).toEqual('poison');
			expect(balbasaur.moves[0]).toEqual('cut');
			expect(balbasaur.moves[1]).toEqual('leer');
		});

		describe('getMoves prototype function', function () {
			it('should return comma-delimited list of moves', function () {
				var balbasaur = new Pokemon(rawData);
				expect(balbasaur.getMoves()).toEqual('cut, leer');
			});
		});

		describe('getType prototype function', function () {
			it('should return comma-delimited list of types', function () {
				var balbasaur = new Pokemon(rawData);
				expect(balbasaur.getTypes()).toEqual('plant, poison');
			});
		});
	});

});