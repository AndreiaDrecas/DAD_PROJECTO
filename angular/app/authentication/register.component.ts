import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';



@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent { 

 constructor(public router: Router, public http: Http) {
  }
  
   
  register(name: any, username: any, password: any){
      let avatar = "";
      let totalVictories = 0;
      let body = JSON.stringify({name, username, password,avatar,totalVictories});

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   
      console.log(body);
      this.http.post('http://localhost:7777/api/v1/players', body, <RequestOptionsArgs> {headers: headers, withCredentials: false}  )
        .subscribe(
            response=> {
                alert("Registation success");
                this.router.navigate(['login']);
            },
        error => {0
          alert(error.text());
          console.log(error.text());
        }
      );
        
  }
}