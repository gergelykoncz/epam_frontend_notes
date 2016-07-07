define(['jquery', "pokeService", "pubSub", "windowScroll"], function ($, pokeService) {
	$(function () {
		function fetchPokemon() {
			pokeService.getPokemon(function (result) {
				$('<tr>' +
					'<td>' + result.id + '<img src="' + result.image + '"></td>' +
					'<td class="name">' + result.name + '</td>' +
					'<td>' + result.getTypes() + '</td>' +
					'<td>' + result.getMoves() + '</td>').appendTo($('tbody'));
			});
		}

		$.subscribe('Scrolling', fetchPokemon);

		fetchPokemon();
	});
});