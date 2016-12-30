import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    public _serverPath: string;
    public validated : boolean;
    constructor(public router: Router, public http: Http) {
        this._serverPath = 'http://localhost:8888/api/v1/players'
    }

    validate() {
        //Isto é só para teste, depois é preciso fazer mesmo a validação e mostrar mensagem de erro
        this.validated = true;

    }


    register(name: any, username: any, passwordHash: any, email: any) {
        let avatar = "";
        let totalVictories = 0;
        let body = JSON.stringify({ name, username, passwordHash, email, avatar, totalVictories });

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        console.log(body);
        this.http.post(this._serverPath, body, <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                alert("Registation success");
                this.router.navigate(['login']);
            },
            error => {
                0
                alert(error.text());
                console.log(error.text());
            }
            );

    }
}