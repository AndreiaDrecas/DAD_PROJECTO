
import { WebSocketService } from '../notifications/websocket.service';
import { Game } from '../gameEngine/game';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../authentication/session.service';
import { GameChatComponent } from '../game/gameChat.component';


@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
    id: number;


    public game: Game;


    constructor(private websocketService: WebSocketService, private route: ActivatedRoute,
        private router: Router, private sessionService: SessionService) {
        this.game = new Game(this.id);
        if (!this.sessionService.isLoggedIn()) {
            this.router.navigate(['login']);
        }

    }

    private sub: any;      // -> Subscriber

    ngOnInit() {
        // get URL parameters
        this.sub = this.route
            .params
            .subscribe(params => {

                this.id = params['id'];

            });

        this.websocketService.getInitBoardMessages().subscribe((m: any) => this.game.tabuleiros.push(m));
        this.websocketService.getInitBoard({ id: this.id, msg: 'Entrei', name: sessionStorage.getItem('name'), idPlayer: sessionStorage.getItem('_id') });


    }


    sendTable() {

        console.log(this.game.tabuleiros);

    }



    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getBoard() {

    }


    tiro() {

    }
}

