import { Component, Input, OnInit } from '@angular/core';
import { WebSocketService } from '../notifications/websocket.service';
import { Game } from '../gameEngine/game';

@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit{

    public game: Game;

constructor(private websocketService: WebSocketService) {}

    ngOnInit() {
        
       this.game = new Game(4);

    }


    getBoard(){

    }


    tiro(){

    }
}