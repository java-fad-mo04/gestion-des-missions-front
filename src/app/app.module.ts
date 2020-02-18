import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import { MissionComponent } from './mission/mission.component';
import { CreerMissionComponent } from './mission/creer-mission/creer-mission.component';
import { MenuComponent } from './menu/menu.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'},
  { path: 'mission', component: MissionComponent, canActivate: [StatutConnecteService]}, // /missions accessible si connecté
  { path: 'menu', component: MenuComponent, canActivate: [StatutConnecteService]},
  { path: 'mission/creer', component: CreerMissionComponent, canActivate: [StatutConnecteService]},
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    MissionComponent,
    MenuComponent,
    CreerMissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
