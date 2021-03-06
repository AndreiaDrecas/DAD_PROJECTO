import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { ValidatorService } from '../validator.service';


@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    public _serverPath: string;

    constructor(public router: Router, public http: Http, private validator: ValidatorService) {
        this._serverPath = 'http://localhost:8080/api/v1/players'

    }

    validate(name: any, username: any, password: any, passwordConfirmation: any, email: any) {
        return true;
    }


    register(name: any, username: any, passwordHash: any, passwordConfirmation: any, email: any) {
        let avatar = "";
        let totalVictories = 0;

        //if (this.validate(name, username, passwordHash, passwordConfirmation, email)) {

        let body = JSON.stringify({ name, username, passwordHash, email, avatar, totalVictories });

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        console.log(body);
        this.http
            .post(this._serverPath, body, <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                alert("Registation success");
                this.router.navigate(['login']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
        //}

    }
}