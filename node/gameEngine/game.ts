import {Tabuleiro} from "./tabuleiro";




export class Game{


public tabuleiros: Tabuleiro[];

public _id: number;

public constructor(nTabuleiros: number, idJogo: number){

this._id = idJogo;

this.tabuleiros = Tabuleiro[nTabuleiros];


for (let i = 1; i<=nTabuleiros; i++ ){
    
    let tabuleiro: Tabuleiro = new Tabuleiro();

    this.tabuleiros.push(tabuleiro);

}


}

}