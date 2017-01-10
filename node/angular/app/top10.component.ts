import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'top10',
    templateUrl: 'top10.component.html'
})

export class Top10Component {
    public Top10Victories: any[] = [];
    public _serverPath: string;
    constructor(public router: Router, public http: Http) {
        this._serverPath = 'http://localhost:8888/api/v1/';
        this.getTop10();
    }

    getTop10() {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.get(this._serverPath + 'top10', <RequestOptionsArgs>{ headers: headers, withCredentials: false })
            .subscribe(
            response => {
                this.Top10Victories = response.json();
                //console.log(response.json());
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }

}
