import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { WebSocketService } from '../notifications/websocket.service';
import { SessionService } from '../authentication/session.service';


@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})

export class LobbyComponent {
    public _serverPath: string;
    public name: any = sessionStorage.getItem('name');
    public totalVictories: any = sessionStorage.getItem('totalVictories');
    public username: any = sessionStorage.getItem('username');
    public gamesPending: any[] = [];


    constructor(public router: Router, public http: Http, private websocketService: WebSocketService, 
    private sessionService: SessionService) {
        this._serverPath = 'http://54.202.237.33:8888/api/v1/';
        
        if(!this.sessionService.isLoggedIn()){
            this.router.navigate(['login']);
        }
        
    }
    //public id_token: any = localStorage.getItem('token');

    getGamesPending() {
        let authToken = sessionStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + authToken);
        this.http.get(this._serverPath + 'games', <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                this.gamesPending = response.json();
                console.log(response.json());
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }


}