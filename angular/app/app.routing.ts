import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { Top10Component }  from './top10.component';
import { GameHistoryComponent }  from './gameHistory.component';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { LobbyComponent }  from './game/lobby.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'lobby', component: LobbyComponent },
    { path: 'top10', component: Top10Component },
    { path: 'gameHistory', component: GameHistoryComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);