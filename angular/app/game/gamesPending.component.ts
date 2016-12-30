import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { WebSocketService } from '../notifications/websocket.service';


@Component({
    moduleId: module.id,
    selector: 'gamesPending',
    templateUrl: 'gamesPending.component.html'
})

export class gamesPendingComponent {
    public _serverPath: string;
    public name: any = localStorage.getItem('name');
    public totalVictories: any = localStorage.getItem('totalVictories');
    public username: any = localStorage.getItem('username');
    public gamesPending: any[] = [];

    constructor(public router: Router, public http: Http, private websocketService: WebSocketService) {
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.getGamesPending();
    }
    //public id_token: any = localStorage.getItem('token');

    getGamesPending() {
        let authToken = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + authToken);
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