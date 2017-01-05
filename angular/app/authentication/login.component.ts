import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

declare var gapi: any;



@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  constructor(public router: Router, public http: Http, private sessionService: SessionService) {}


  	public fb : any;

  login(event: any, username: any, password: any) {
    this.sessionService.login(event, username, password);
  }



}
