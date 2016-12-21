import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

import { NotificationModule } from './notifications/notifications.module';
import {ChatComponent} from './chat.component';
import {BoardComponent} from './game/board.component';
import {GameComponent} from './game/game.component';
import {ShipComponent} from './game/ship.component';
import { WebSocketService } from './notifications/websocket.service';
import { TableToSendService } from './gameEngine/tableToSend.service';

@NgModule({
  imports:      [ BrowserModule, NotificationModule, FormsModule ],
  declarations: [ AppComponent, ChatComponent, BoardComponent, ShipComponent, GameComponent ],
  providers:    [ WebSocketService, TableToSendService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }