import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { Top10Component } from './top10.component';
import { HomeComponent } from './home.component';
import { GameHistoryComponent } from './gameHistory.component'

//authentication imports
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { LobbyComponent } from './game/lobby.component';

//services
import { SessionService } from './authentication/session.service';
import { ValidatorService } from './validator.service';

//dashboard
import { NotificationModule } from './notifications/notifications.module';
import { ChatComponent } from './chat.component';
import { NavComponent } from './nav.component';
import { BoardComponent } from './game/board.component';
import { GameComponent } from './game/game.component';
import { gamesPendingComponent } from './game/gamesPending.component';
import { ShipComponent } from './game/ship.component';
import { WebSocketService } from './notifications/websocket.service';

@NgModule({
  imports: [BrowserModule, NotificationModule, FormsModule, routing],
  declarations: [AppComponent, ChatComponent, BoardComponent, ShipComponent,
    GameComponent, LoginComponent, RegisterComponent, HomeComponent, LobbyComponent, Top10Component, 
    GameHistoryComponent, NavComponent,gamesPendingComponent ],
  providers: [ WebSocketService, SessionService, ValidatorService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
