import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../notifications/websocket.service';

import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'gameChat',
    templateUrl: 'gameChat.component.html'
})
export class GameChatComponent {
    public message: string;
    public playersCChannel: string[] = [];
    public chatCChannel: string[] = [];
    private _serverPath: string;
    public authToken: string = sessionStorage.getItem('id_token');


    constructor(public router: Router, public http: Http, private websocketService: WebSocketService) { 
        this._serverPath = 'http://localhost:8888/api/v1/';
    }

    send(): void {
        this.websocketService.sendGameChatMessage(this.message);
    

        this.message = '';
    }

    ngOnInit() {
        this.websocketService.getGameChatMessages().subscribe((m: any) => this.chatCChannel.push(<string>m));
        this.websocketService.getGamePlayersMessages().subscribe((m: any) => this.playersCChannel.push(<string>m));
    }

     getGames() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        this.http.get(this._serverPath + 'games', <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                //buscar pelo id do game o room
                //invocar o método do WebSocketService que trata do chat, criei só um experimental
                //não criei os que faltam.
                //testSendChatMessage(message: any, room: number, player: any)

            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }

}
