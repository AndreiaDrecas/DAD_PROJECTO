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

	constructor(public router: Router, public http: Http, private websocketService: WebSocketService) {
		let id = sessionStorage.getItem('_id');
		this.authToken = sessionStorage.getItem('id_token');
		this.arrayPlayers.push({ player: id, score: 0 });
		this._serverPath = 'http://localhost:8888/api/v1/';
	}


	create() {

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


					console.log(response.json());

				}
			}, error => {

				alert(error.text());
				console.log(error.text());
			}

			);
	}
}