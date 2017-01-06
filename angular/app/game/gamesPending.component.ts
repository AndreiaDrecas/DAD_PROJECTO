import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { WebSocketService } from '../notifications/websocket.service';


@Component({
    moduleId: module.id,
    selector: 'gamesPending',
    templateUrl: 'gamesPending.component.html'
})

export class GamesPendingComponent {
    private _serverPath: string;
    public totalVictories: any = sessionStorage.getItem('totalVictories');
    private userName: any = sessionStorage.getItem('username');
    public gamesPending: any[] = [];
    public authToken: string = sessionStorage.getItem('id_token');
    private userID = sessionStorage.getItem('_id');
    public arrayPlayers: any[] = [];
    private body: any;


    constructor(public router: Router, public http: Http, private websocketService: WebSocketService) {
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.getGamesPending();


    }


    enterGame(id: number) {

        this.getGame(id);


    }

    getGame(id: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        this.http.get(this._serverPath + 'games/' + id, <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {

                if (response.json().players.length <= 4) {

                    this.arrayPlayers = response.json().players;
                    this.arrayPlayers.push({
                        player: this.userID, name: this.userName,
                        statusDate: Date.now(), score: 0
                    });

                    //Podemos criar um serviço que invoque parte deste código e que se limite a saber
                    //se já estão mais do que dois players (contando o array), se já estiverem mais
                    //que dois no lobby, ao pé do botão enter game dizia: Ready to Start, has at least 2 players!
                    // ou qq coisa deste género

                    //Mudei o state pq já tem mais do que dois players no jogo!
                    this.body = JSON.stringify({ players: this.arrayPlayers, state: 'readyToStart' });


                    this.updateGame(this.body, id);
                }

            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }

    updateGame(body: any, id: number) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        this.http.put(this._serverPath + 'games/' + id, body, <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                this.router.navigate(['game', id]);

            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );

    }

    getGamesPending() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + this.authToken);
        this.http.get(this._serverPath + 'games', <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                this.gamesPending = response.json();

            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }
}