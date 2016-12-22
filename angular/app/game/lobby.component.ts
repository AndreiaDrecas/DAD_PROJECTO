import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import {WebSocketService } from '../notifications/websocket.service';


@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})

export class LobbyComponent {
    public _serverPath: string;
    public name: any = localStorage.getItem('name');
    public totalVictories: any = localStorage.getItem('totalVictories');
    public username: any = localStorage.getItem('username');
    public gamesPending: any[] = [];

    constructor(public router: Router, public http: Http,private websocketService: WebSocketService) {
        this._serverPath = 'http://localhost:8888/api/v1/';
    }
    //public id_token: any = localStorage.getItem('token');
    
    getGamesPending(){
        let authToken = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','bearer ' + authToken);
        this.http.get(this._serverPath+'games',<RequestOptionsArgs> {headers: headers, withCredentials: false})
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
    
    logout() {

        let authToken = localStorage.getItem('id_token');
       console.log(authToken);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','bearer ' + authToken);
         let body = JSON.stringify({});
       // headers.append('Authorization','Bearer 4a1fc711f2f7756353da87bf11e8d6a4828418a6');
        console.log(headers);
       this.http.post(this._serverPath+'logout', body ,<RequestOptionsArgs> {headers: headers, withCredentials: false})
            .subscribe(
            response => {
                alert("Logout success");
                this.router.navigate(['login']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }


}