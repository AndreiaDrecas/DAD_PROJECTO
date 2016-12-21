import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})

export class LobbyComponent {
    //public id_token: any = localStorage.getItem('token');
    public name: any = localStorage.getItem('name');
    public totalVictories: any = localStorage.getItem('totalVictories');
    public username: any = localStorage.getItem('username');
    
}