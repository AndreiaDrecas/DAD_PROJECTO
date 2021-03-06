import { Injectable } from '@angular/core';
import {  Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';

@Injectable()
export class WebSocketService {
    private socket: SocketIOClient.Socket;
    constructor() {
        if (!this.socket) {
            this.socket = io(`http://54.202.237.33:8080`);
            //this.socket = io(`http://${window.location.hostname}:${window.location.port}`);
        }
    }

   

    sendChatMessage(message: any) {
        this.socket.emit('chat', sessionStorage.getItem('name') + ': ' + message);
    }

    sendGameChatMessage(msgData: any) {
        this.socket.emit('chatGame', msgData);
    }

    sendGamePlayersMessage(msgData: any) {
        this.socket.emit('gameNotification', msgData);
    }

     getInitBoard(msgData: any) {
       this.socket.emit('initBoard', msgData);
    } 

    sendTable(msgData: any) {
       this.socket.emit('tabuleiro', msgData);
    } //array de tabuleiros, nome e ID do user

    getTable(): Observable<any> {
        return this.listenOnChannel('tabuleiro');
    }

    getPlayersMessages(): Observable<any> {
        return this.listenOnChannel('players');
    }



    getGameChatMessages(): Observable<any> {
        return this.listenOnChannel('chatGame');
    }

    getGamePlayersMessages(): Observable<any> {
        return this.listenOnChannel('gameNotification');
    }

    getChatMessages(): Observable<any> {
        return this.listenOnChannel('chat');
    }

    // Extra Exercise
    sendClickElementMessage(tabuleiro: any) {
        this.socket.emit('clickElement', tabuleiro);
    }

    getInitBoardMessages(): Observable<any> {
        return this.listenOnChannel('initBoard');
    }


    private listenOnChannel(channel: string): Observable<any> {
        return new Observable((observer: any) => {
            this.socket.on(channel, (data: any) => {
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
    }
}
