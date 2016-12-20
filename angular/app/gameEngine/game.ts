import {Tabuleiro} from "./tabuleiro";




export class Game{


public tabuleiros: Tabuleiro[];



public constructor(nTabuleiros: number){


    this.tabuleiros = [];


    for (let i = 1; i<=nTabuleiros; i++ ){
        
        let tabuleiro: Tabuleiro = new Tabuleiro();

        this.tabuleiros.push(tabuleiro);

    }


}

}