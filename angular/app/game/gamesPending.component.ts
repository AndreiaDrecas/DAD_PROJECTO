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
    public _serverPath: string;
    public name: any = sessionStorage.getItem('name');
    public totalVictories: any = sessionStorage.getItem('totalVictories');
    public username: any = sessionStorage.getItem('username');
    public gamesPending: any[] = [];
    public authToken: string = sessionStorage.getItem('id_token');
    public idPlayer = sessionStorage.getItem('_id');
    public arrayPlayers: any[] = [];


    constructor(public router: Router, public http: Http, private websocketService: WebSocketService) {
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.getGamesPending();


    }
    //public id_token: any = localStorage.getItem('token');


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
                if (response.json().players.length < 5) {
                    this.arrayPlayers = response.json().players;
                    this.arrayPlayers.push({ player: id, score: 0 });
                    let body = JSON.stringify({ players: this.arrayPlayers, state: 'pending' });
                    this.updateGame(body, id);
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