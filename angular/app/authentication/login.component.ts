import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { SessionService } from './session.service';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  public _serverPath: string;
  public name: any;

  constructor(public router: Router, public http: Http, private sessionService: SessionService) {
    this._serverPath = 'http://localhost:8888/api/v1/login';
  }


  login(event: any, username: any, password: any) {
    event.preventDefault();

    let body = JSON.stringify({ username, password });
    let name = JSON.stringify({ password });

    // session Service
    this.sessionService.login();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this._serverPath, body, { headers: headers })
      .subscribe(
      response => {
        console.log(response.json());
        localStorage.setItem('id_token', response.json().token);

        localStorage.setItem('name', response.json().name);
        localStorage.setItem('totalVictories', response.json().totalVictories);
        localStorage.setItem('username', response.json().username);
        localStorage.setItem('avatar', response.json().avatar);
        console.log(response.json().token);
        this.router.navigate(['lobby']);
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
      );
  }




}
