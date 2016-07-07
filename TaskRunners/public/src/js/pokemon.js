define([], function () {
	function Pokemon(rawData) {
		var that = this;

		this.id = rawData.id;
		this.name = rawData.name;
		this.image = rawData.sprites.front_default;
		this.type = [];
		rawData.types.forEach(function (rawType) {
			that.type.push(rawType.type.name);
		});
		this.moves = [];
		rawData.moves.forEach(function (rawMove) {
			that.moves.push(rawMove.move.name);
		});
	}

	Pokemon.prototype.getTypes = function () {
		return this.type.sort().join(', ');
	};

	Pokemon.prototype.getMoves = function () {
		return this.moves.sort().join(', ');
	};

	return Pokemon;
});