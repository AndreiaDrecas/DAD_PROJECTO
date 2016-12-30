import { Component } from '@angular/core';
import { SessionService } from './authentication/session.service';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'nav.component.html'
})

export class NavComponent {
    public _serverPath: string;
    public name: any;
    public avatar: any; 

    constructor(public router: Router, public http: Http, private sessionService: SessionService) {
        this._serverPath = 'http://localhost:8888/api/v1/';

    }

    refresh(){
        this.name = localStorage.getItem('name');
        this.avatar = localStorage.getItem('avatar');
    }

    userIsIn() {
        if (this.sessionService.isLoggedIn()) {
            this.refresh();
            return true;
        }

        return false;
    }

    //Isto ainda não está a funcionar mto bem
    userIsOut() {
        this.sessionService.logout();
        this.logout();
        localStorage.clear();
    }

    logout() {
        this.sessionService.logout();
    }
}