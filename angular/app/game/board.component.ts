import { Component, Input, OnInit } from '@angular/core';
import {WebSocketService } from '../notifications/websocket.service';
import {Tabuleiro } from '../gameEngine/tabuleiro';
import {Celula, TipoCelula } from '../gameEngine/celula';
import {TipoNavio, Orientacao} from "../gameEngine/navio";
import {Posicao} from "../gameEngine/posicao";

@Component({
    moduleId: module.id,
    selector: 'board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css']
})
export class BoardComponent implements OnInit{
    @Input() idGame: any;
    public tabuleiro: Tabuleiro ;
    
    constructor(private websocketService: WebSocketService) {}

    ngOnInit() {
        
        this.tabuleiro = new Tabuleiro();
        this.websocketService.sendTable({id: this.idGame,msg: this.tabuleiro, name: sessionStorage.getItem('name')})
        this.websocketService.getBoardMessages().subscribe((m:any) => { this.tabuleiro = m }); 
       // this.tabuleiro.adicionaNavio(TipoNavio.Couracado,Orientacao.Roda90,"D",5);
        //this.tabuleiro.adicionaNavio(TipoNavio.ContraTorpedeiro,Orientacao.Roda90,"D",2);

    }
    
    clickElemento(index: Celula){

        this.tabuleiro.resetReferencias();
        //limpa a table
        //emit da table
        this.tabuleiro.nTiros += 1;
        this.tabuleiro.resetReferencias();
        

        
        // TIRO 
        this.tabuleiro.getCelula(index.posicao.linha,index.posicao.coluna).tiro = true;
        
        this.tabuleiro.adicionaNavio(TipoNavio.ContraTorpedeiro,Orientacao.Roda90,index.posicao.linha,index.posicao.coluna);
       

    }

    

    getPosicaoCelula(index: number){
        if(index)

        return
    }

    getText(celula: Celula){
        
        if(celula.tiro){
            return "X";
        }
        return "";

    }


    getColor(celula: Celula){
        switch (celula.tipo) {
            case TipoCelula.Mar: return 'blue';
            case TipoCelula.Navio: return 'red';
            
        }
        return 'white';
    }
}



