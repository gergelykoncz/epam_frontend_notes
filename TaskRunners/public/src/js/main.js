define(['jquery', "pokeService", "pubSub", "windowScroll"], function ($, pokeService) {
    $(function () {
        function fetchPokemon() {
            pokeService.getPokemon(function (result) {
                $('<tr>' +
                    '<td>' + result.id + '<img src="' + result.image + '"></td>' +
                    '<td class="name"><a href="details.html?id=' + result.id + '">' + result.name + '</a></td>' +
                    '<td>' + result.getTypes() + '</td>' +
                    '<td>' + result.getMoves() + '</td></tr>').appendTo($('tbody'));
            });
        }

        $.subscribe('Scrolling', fetchPokemon);

        fetchPokemon();
    });
});