import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { WebSocketService } from '../notifications/websocket.service';
import { SessionService } from '../authentication/session.service';
import { BoardComponent } from './board.component';


@Component({
	moduleId: module.id,
	selector: 'newGame',
	templateUrl: 'newGame.component.html'
})

export class NewGameComponent {

	public arrayPlayers: any[] = [];
	public authToken: any;
	private _serverPath: string;
	private userId: any;
	private userName: any;


	constructor(public router: Router, public http: Http, private websocketService: WebSocketService) {
		this.userId = sessionStorage.getItem('_id');
		this.userName = sessionStorage.getItem('username');

		this.authToken = sessionStorage.getItem('id_token');

		this._serverPath = 'http://localhost:8888/api/v1/';


	}


	create() {

		let playerInfo: any = {
			uid: this.userId, name: this.userName,
			statusDate: Date.now(), score: 0
		};

		this.arrayPlayers = [{
			player: playerInfo
		}];


		let body = JSON.stringify({ players: this.arrayPlayers, state: 'pending' });
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', 'bearer ' + this.authToken);
		console.log(body);

		this.http
			.post(this._serverPath + 'games', body,
			<RequestOptionsArgs>{ headers: headers, withCredentials: false })
			.subscribe(response => {

				if (response.ok) {
					this.router.navigate(['game', response.json()._id]);

				}
			}, error => {

				alert(error.text());
				console.log(error.text());
			}


			);
	}
}