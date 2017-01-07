"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var websocket_service_1 = require("../notifications/websocket.service");
var tabuleiro_1 = require("../gameEngine/tabuleiro");
var celula_1 = require("../gameEngine/celula");
var navio_1 = require("../gameEngine/navio");
var BoardComponent = (function () {
    function BoardComponent(websocketService) {
        this.websocketService = websocketService;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabuleiro = new tabuleiro_1.Tabuleiro();
        this.websocketService.sendTable({ id: this.idGame, msg: this.tabuleiro, name: sessionStorage.getItem('name') });
        this.websocketService.getBoardMessages().subscribe(function (m) { _this.tabuleiro = m; });
        // this.tabuleiro.adicionaNavio(TipoNavio.Couracado,Orientacao.Roda90,"D",5);
        //this.tabuleiro.adicionaNavio(TipoNavio.ContraTorpedeiro,Orientacao.Roda90,"D",2);
    };
    BoardComponent.prototype.clickElemento = function (index) {
        this.tabuleiro.resetReferencias();
        //limpa a table
        //emit da table
        this.tabuleiro.nTiros += 1;
        this.tabuleiro.resetReferencias();
        // TIRO 
        this.tabuleiro.getCelula(index.posicao.linha, index.posicao.coluna).tiro = true;
        this.tabuleiro.adicionaNavio(navio_1.TipoNavio.ContraTorpedeiro, navio_1.Orientacao.Roda90, index.posicao.linha, index.posicao.coluna);
    };
    BoardComponent.prototype.getPosicaoCelula = function (index) {
        if (index)
            return;
    };
    BoardComponent.prototype.getText = function (celula) {
        if (celula.tiro) {
            return "X";
        }
        return "";
    };
    BoardComponent.prototype.getColor = function (celula) {
        switch (celula.tipo) {
            case celula_1.TipoCelula.Mar: return 'blue';
            case celula_1.TipoCelula.Navio: return 'red';
        }
        return 'white';
    };
    return BoardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BoardComponent.prototype, "idGame", void 0);
BoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'board',
        templateUrl: 'board.component.html',
        styleUrls: ['board.component.css']
    }),
    __metadata("design:paramtypes", [websocket_service_1.WebSocketService])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map