import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
  private loggedIn = false;
  private _serverPathLogin: string;
  private _serverPathLogout: string;

  constructor(public router: Router, private http: Http) {
    this.loggedIn = !!localStorage.getItem('id_token'); //!!localStorage.getItem('id_toen'); quero entender o porque. gabriel
    this._serverPathLogin = 'http://54.202.237.33:8888/api/v1/login';
    this._serverPathLogout = 'http://54.202.237.33:8888/api/v1/';
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

          sessionStorage.setItem('_id', response.json()._id);
          sessionStorage.setItem('id_token', response.json().token);
          sessionStorage.setItem('name', response.json().name);
          sessionStorage.setItem('totalVictories', response.json().totalVictories);
          sessionStorage.setItem('username', response.json().username);
          sessionStorage.setItem('avatar', response.json().avatar);
         
           this.loggedIn = true;




          this.router.navigate(['lobby']);
        }
      }, error => {

        alert(error.text());
        console.log(error.text());
      }

      );
  }

  logout() {

    let authToken = sessionStorage.getItem('id_token');
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


          this.loggedIn = false;
          sessionStorage.clear();
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