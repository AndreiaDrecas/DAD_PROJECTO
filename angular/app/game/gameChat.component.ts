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
    public contador: number = 0;
    public channel: string;
    public players: string;

    constructor(private websocketService: WebSocketService) { 
        this.contador += 1;
        this.channel = 'channel' + this.contador;
        this.players = 'player' + this.contador;

    }

    send(): void {
        this.websocketService.sendGameChatMessage(this.message);
        
        //método experimental chat room 
        // a ideia é formar um channel só relativo a cada game, pensei usar um contador mais as palavras
        //channel e player, mas o ideal seria com o id em vez do contador
        //como fazemos para usar o id do game em vez do contador? do lado da API vai dar jeito.
        //criamos um serviço só para guardar o id e mandar para aqui? Parece-me bué estranho mas não
        //me lembro de fazer isto de outra maneira.

        this.websocketService.sendGCMessage(this.message, this.channel);

        this.message = '';
    }

    ngOnInit() {
        this.websocketService.getGameChatMessages().subscribe((m: any) => this.chatCChannel.push(<string>m));
        this.websocketService.getGamePlayersMessages().subscribe((m: any) => this.playersCChannel.push(<string>m));
        
        //métodos experimentais chat room
        this.websocketService.getGCMessages(this.channel).subscribe((m: any) => this.chatCChannel.push(<string>m));
        this.websocketService.getGPMessages(this.players).subscribe((m: any) => this.chatCChannel.push(<string>m));

    }

}
