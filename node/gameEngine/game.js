"use strict";
var tabuleiro_1 = require("./tabuleiro");
var Game = (function () {
    function Game(nTabuleiros, idJogo) {
        this._id = idJogo;
        this.tabuleiros = tabuleiro_1.Tabuleiro[nTabuleiros];
    }
    return Game;
}());
exports.Game = Game;
