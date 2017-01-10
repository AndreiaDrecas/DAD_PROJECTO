import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { SessionService } from './authentication/session.service';

@Component({
    moduleId: module.id,
    selector: 'gameHistory',
    templateUrl: 'gameHistory.component.html'
})

export class GameHistoryComponent {
    private history: any[] = [];
    private userHistory: any[] = [];
    private _serverPath: string;
    private userId = sessionStorage.getItem('_id');
    private isLoggedIn: boolean;

    constructor(private session: SessionService, public router: Router, public http: Http) {
        this._serverPath = 'http://54.202.237.33:8080/api/v1/';
        this. isLoggedIn = this.session.isLoggedIn();
        this.getGameHistory();
    }

    getHistoryOfUser() {

        for (let i of this.history) {
            for (let ps of i.players) {
                if (ps.player.uid == this.userId) {
                    console.log(ps.player.uid);
                    console.log('Coincide!');
                    this.userHistory.push(i);
                    console.log(i);
                }
            }
        }

    }

    getGameHistory() {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
            .get(this._serverPath + 'finishedgames', <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                this.history = response.json();
                console.log(response.json());
                this.getHistoryOfUser();

            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );

    }

}
