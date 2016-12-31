
import { WebSocketService } from '../notifications/websocket.service';
import { Game } from '../gameEngine/game';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
  id: number;
 

    public game: Game;

constructor(private websocketService: WebSocketService, private route: ActivatedRoute) {}

private sub: any;      // -> Subscriber

ngOnInit() {
    // get URL parameters
    this.sub = this.route
        .params
        .subscribe(params => {
           
            this.id = params['id'];
           
    });
}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

    getBoard(){

    }


    tiro(){

    }
}

