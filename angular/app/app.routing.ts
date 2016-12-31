import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { Top10Component }  from './top10.component';
import { GameHistoryComponent }  from './gameHistory.component';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { LobbyComponent }  from './game/lobby.component';
import { NewGameComponent } from './game/newGame.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'lobby', component: LobbyComponent },
    { path: 'top10', component: Top10Component },
    { path: 'gameHistory', component: GameHistoryComponent },
   // { path: 'game' , component: NewGameComponent },
    { path: 'game/:id' , component: GameComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' , pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);