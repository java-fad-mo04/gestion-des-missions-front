import { BrowserModule, Title } from '@angular/platform-browser';
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
import { MenuComponent } from './menu/menu.component';
import { CollegueComponent } from './collegue/collegue.component';
import { DemandeMissionComponent } from './demande-mission/demande-mission.component';
import { MissionComponent } from './mission/mission.component';
import { NatureComponent } from './nature/nature.component';
import { TransportComponent } from './transport/transport.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { VisualiserMissionComponent } from './visualiser-mission/visualiser-mission.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GestionMissionComponent } from './gestion-mission/gestion-mission.component';

const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate:[StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent},
  { path: 'demande-mission', component: DemandeMissionComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'gestion-mission', component: GestionMissionComponent},
  { path: 'collegue', component: CollegueComponent},
  { path: 'mission', component: MissionComponent},
  { path: '', redirectTo: '/acceuil', pathMatch: 'full'}
  //{ path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    MenuComponent,
    CollegueComponent,
    DemandeMissionComponent,
    MissionComponent,
    NatureComponent,
    TransportComponent,
    AcceuilComponent,
    VisualiserMissionComponent,
    GestionMissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },
  Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
