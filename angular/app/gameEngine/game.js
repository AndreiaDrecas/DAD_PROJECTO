"use strict";
var tabuleiro_1 = require("./tabuleiro");
var Game = (function () {
    function Game(nTabuleiros) {
        this.tabuleiros = [];
        for (var i = 1; i <= nTabuleiros; i++) {
            var tabuleiro = new tabuleiro_1.Tabuleiro();
            this.tabuleiros.push(tabuleiro);
        }
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map