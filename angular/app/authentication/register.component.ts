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
    public errorMessagePasswordLength: string;
    public errorMessagePasswordConfirmation: string;
    public errorMessageValidName: string;

    constructor(public router: Router, public http: Http, private validator: ValidatorService) {
        this._serverPath = 'http://localhost:8888/api/v1/players'
        /*this.errorMessagePasswordLength = null;
        this.errorMessagePasswordConfirmation = null;
        this.errorMessageValidName = null;*/
    }

    validate(name: any, username: any, password: any, passwordConfirmation: any, email: any) {
        //password >= 3
        //nome de utilizador = nome único
        //mail válido

        /*this.errorMessagePasswordLength = null;
        this.errorMessagePasswordConfirmation = null;
        this.errorMessageValidName = null;

        if (!this.validator.passwordLength(password)) {
            this.errorMessagePasswordLength = "Password has few than 3 digits!";

            return false;
        }

        if (!this.validator.matchingPasswords(password, passwordConfirmation)) {
            this.errorMessagePasswordConfirmation = "Password and Password Confirmation are different!";

            return false;
        }

        if (!this.validator.emailValidator) {
            //this.errorMessage = "Email have wrong format!";

            return false;
        }

        return true;*/

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