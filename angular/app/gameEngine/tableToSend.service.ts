import { Injectable } from '@angular/core';
import {  Http, Response } from '@angular/http';
import { Tabuleiro } from './tabuleiro';

@Injectable()
export class TableToSendService {
    private board: Tabuleiro;

    constructor() {
        this.board = new Tabuleiro();
    }

    tableHandler(recievedBoard: Tabuleiro){
        
        recievedBoard.celulas.forEach(element => {
            element.pertenceA = null;
        });

        this.board = recievedBoard;

        return this.board;
    }


}
