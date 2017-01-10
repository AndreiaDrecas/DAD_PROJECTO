import { Component, Input, OnInit } from '@angular/core';
import {WebSocketService } from '../notifications/websocket.service';

@Component({
    moduleId: module.id,
    selector: 'ship-selector',
    templateUrl: 'ship.component.html'
})
export class ShipComponent implements OnInit{


    constructor(private websocketService: WebSocketService) {}

    ngOnInit() {
     ///
        
    }
    
    
}
