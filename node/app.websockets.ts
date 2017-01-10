const io = require('socket.io');
import { Game } from "./gameEngine/game";
import { Tabuleiro } from "./gameEngine/tabuleiro";
import { databaseConnection as database } from './app.database';
const mongodb = require('mongodb');

export class WebSocketServer {
    public games: any[] = [];
    public io: any;



    public init = (server: any) => {

        this.io = io.listen(server);

        this.io.sockets.on('connection', (client: any) => {

            client.emit('players', Date.now() + ': Welcome to battleship');

            client.broadcast.emit('players', Date.now() + ': A new player has arrived');

            client.on('chat', (data) => this.io.emit('chat', data));



            client.on('chatGame', function (msgData) {

                this.join(msgData.id);
                this.emit('chatGame', msgData.name + ': ' + msgData.msg);
                this.to(msgData.id).emit('chatGame', msgData.name + ': ' + msgData.msg);

            });

            client.on('gameNotification', function (msgData) {
                var sessionid = client.id;

                this.join(msgData.id);
                this.emit('gameNotification', msgData.name + ': Welcome to game Room ' + msgData.id);
                this.broadcast.to(msgData.id).emit('gameNotification', Date.now() + ': ' + msgData.name + ' has arrived');


            });



            //init board
            client.on('initBoard', function (msgData) {

                this.join(msgData.id);

                var tabuleiro = new Tabuleiro();
                tabuleiro.idPlayer = msgData.idPlayer;
                this.emit('initBoard', tabuleiro);
                
            });


            //recieve and send tabuleiro
            client.on('tabuleiro', function (msgData) {

                this.join(msgData.id);

                this.emit('tabuleiro', msgData.tabuleiro);
                this.to(msgData.id).emit('tabuleiro', msgData.tabuleiro);

            });

            client.on('clickElement', function (msgData) {

                this.join(msgData.id);
                this.emit('clickElement', msgData.tabuleiro);
                this.to(msgData.id).emit('clickElement', msgData.tabuleiro);

            });

            client.on('board', function (msgData) {

                this.join(msgData.id);
                this.emit('board', msgData.tabuleiro);
                this.to(msgData.id).emit('board', msgData.tabuleiro);

            });
            //Extra Exercise


        });
    };

    public notifyAll = (channel: string, message: any) => {
        this.io.sockets.emit(channel, message);
    };

    public getObjectInArray = function (arr, key) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].hasOwnProperty(key)) return arr[i][key];
        }
    };

};
