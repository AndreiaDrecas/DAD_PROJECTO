const io = require('socket.io');

export class WebSocketServer {
    public board: number[] = [];
    public io: any;

    public initBoard() {
        for (let i = 0; i < 100; i++) {
            this.board[i] = 0;
        }
    }

    public init = (server: any) => {
        this.initBoard();
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

};
