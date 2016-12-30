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

	public arrayPlayers: any;


	constructor( public router: Router, public http: Http, private websocketService: WebSocketService){

		
	}


	create(){

		this.arrayPlayers = JSON.stringify({player: sessionStorage.getItem('_id') , score: 0});
	
		let game = JSON.stringify({players: this.arrayPlayers , state: 'pending'});

		console.log(game);
	}
}