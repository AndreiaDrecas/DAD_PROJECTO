import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  public name: any;

  constructor(public router: Router, public http: Http) {
  }

  login(event: any, username: any, password: any) {
    event.preventDefault();

    let body = JSON.stringify({ username, password });
    let name = JSON.stringify({ password });
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    this.http.post('http://localhost:7777/api/v1/login', body, { headers: headers })
      .subscribe(
      response => {
        console.log(response.json());
        localStorage.setItem('id_token', response.json().token);

        localStorage.setItem('name', response.json().name);
        localStorage.setItem('totalVictories', response.json().totalVictories);
        localStorage.setItem('username', response.json().username);
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
