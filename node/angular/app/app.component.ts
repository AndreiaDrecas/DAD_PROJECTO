import { Component } from '@angular/core';
import { SessionService } from './authentication/session.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(private sessionService: SessionService) {}

    isLoggedIn(){
        return this.sessionService.isLoggedIn();
    }
}
