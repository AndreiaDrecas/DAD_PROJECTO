import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../notifications/websocket.service';

@Component({
    moduleId: module.id,
    selector: 'gameChat',
    templateUrl: 'gameChat.component.html'
})
export class GameChatComponent {
    public message: string;
    public playersCChannel: string[] = [];
    public chatCChannel: string[] = [];


    constructor(private websocketService: WebSocketService) { 

    }

    send(): void {
        this.websocketService.sendGameChatMessage(this.message);
    

        this.message = '';
    }

    ngOnInit() {
        this.websocketService.getGameChatMessages().subscribe((m: any) => this.chatCChannel.push(<string>m));
        this.websocketService.getGamePlayersMessages().subscribe((m: any) => this.playersCChannel.push(<string>m));
    }

}
