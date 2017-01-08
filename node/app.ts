const restify = require('restify');
const passport = require('passport');
const path = require('path');

import {databaseConnection as database} from './app.database';
import {WebSocketServer} from './app.websockets';
import {HandlerSettings} from './handler.settings';

const url = 'mongodb://localhost:8888/DAD_PROJECTO';

// Create Restify and WebSocket Server
const restifyServer = restify.createServer();
const socketServer = new WebSocketServer();

// Prepare and configure Restify Server
restify.CORS.ALLOW_HEADERS.push("content-type");
restifyServer.use(restify.bodyParser());
restifyServer.use(restify.queryParser());
restifyServer.use(restify.CORS());

restifyServer.opts(/.*/, function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    res.send(200);
    return next();
});

restifyServer.use(restify.fullResponse());

// Prepare and configure Passport based security
import {Security} from './app.security';
let security = new Security();
security.initMiddleware(restifyServer);

// Settings are used on all HTTP (Restify) Handlers
let settings = new HandlerSettings(socketServer, security,'/api/v1/');

// Authentication Handlers
import {Authentication} from './app.authentication';
new Authentication().init(restifyServer, settings);


// Players Handler
import {Player} from './app.players';
new Player().init(restifyServer, settings);

// Games Handler
import {GameAPI} from './app.gameAPI';
new GameAPI().init(restifyServer, settings);

restifyServer.get(/^\/(?!api\/).*/, restify.serveStatic({
  directory: './angular',
  default: 'index.html'
}));

database.connect(url, () => {
    restifyServer.listen(8888, () => console.log('%s listening at %s', restifyServer.name, restifyServer.url));
    // Websocket is initialized after the server
    socketServer.init(restifyServer.server);
});
