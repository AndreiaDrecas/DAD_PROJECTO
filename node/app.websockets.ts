const io = require('socket.io');

export class WebSocketServer {
    public board: number[] = [];
    public io: any;

    public initBoard(){
        for(let i=0; i<100; i++) {
            this.board[i]=0;
        }
    }

    public init = (server: any) => {
        this.initBoard();
        this.io = io.listen(server);            
        this.io.sockets.on('connection', (client: any) => {
            
            client.emit('players', Date.now() + ': Welcome to battleship');
            
            client.broadcast.emit('players', Date.now() + ': A new player has arrived');

            client.emit('playersC', Date.now() + ': Welcome to battleship');
            
            client.broadcast.emit('playersC', Date.now() + ': A new player has arrived');
            
            client.on('chat', (data) => this.io.emit('chat', data));

            client.on('chatC', (data) => this.io.emit('chatC', data));
            
            //recieve and send tabuleiro
            client.on('tabuleiro', function(tabuleiro){
                console.log(tabuleiro);
                io.sockets.emit('tabuleiro', tabuleiro);
            });

            

            //Extra Exercise
            client.emit('board', this.board);
            client.on('clickElement', (tabuleiro) => {
                
                this.notifyAll('board', tabuleiro);
            });

        });
    };
   public notifyAll = (channel: string, message: any) => {
        this.io.sockets.emit(channel, message);
    }; 
};
