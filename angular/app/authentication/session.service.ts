import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
  private loggedIn = false;
  private _serverPathLogin: string;
  private _serverPathLogout: string;

  constructor(public router: Router, private http: Http) {
    this.loggedIn = !!localStorage.getItem('id_token');
    this._serverPathLogin = 'http://localhost:8888/api/v1/login';
    this._serverPathLogout = 'http://localhost:8888/api/v1/';
  }

  login(event: any, username: any, password: any) {

    event.preventDefault();
    let body = JSON.stringify({ username, password });
    let name = JSON.stringify({ password });


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http
      .post(this._serverPathLogin, body, { headers: headers })
      .subscribe(response => {

        if (response.ok) {

          console.log(response.json());
          localStorage.setItem('id_token', response.json().token);
          this.loggedIn = true;

          localStorage.setItem('name', response.json().name);
          localStorage.setItem('totalVictories', response.json().totalVictories);
          localStorage.setItem('username', response.json().username);

          console.log(response.json().token);



          this.router.navigate(['lobby']);
        }
      }, error => {

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
    headers.append('Authorization', 'bearer ' + authToken);
    let body = JSON.stringify({});
    // headers.append('Authorization','Bearer 4a1fc711f2f7756353da87bf11e8d6a4828418a6');
    console.log(headers);

    this.http
      .post(this._serverPathLogout + 'logout', body,
      <RequestOptionsArgs>{ headers: headers, withCredentials: false })
      .subscribe(response => {

        if (response.ok) {
          alert("Logout success");

          localStorage.clear();
          this.loggedIn = false;

          this.router.navigate(['login']);
        }

      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
      );
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}