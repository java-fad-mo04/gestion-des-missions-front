import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { CreationNatureDirective } from './creation-nature/creation-nature.directive';

import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CreationNatureComponent } from './creation-nature/creation-nature.component';
import { VisualisationNatureComponent } from './visualisation-nature/visualisation-nature.component';
import { PlanningMissionComponent } from './planning-mission/planning-mission.component';
import { PrimesComponent } from './primes/primes.component';
import { SaisieNoteComponent } from './saisie-note/saisie-note.component';
import { ValidationMissionComponent } from './validation-mission/validation-mission.component';
import { VisualisationMissionComponent } from './visualisation-mission/visualisation-mission.component';
import { DemandeMissionComponent } from './demande-mission/demande-mission.component';
import { TechComponent } from './tech/tech.component';
import { ModifMissionComponent } from './modif-mission/modif-mission.component';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'nature', component: VisualisationNatureComponent },
  { path: 'demande-mission', component: DemandeMissionComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'gestion-mission', component: VisualisationMissionComponent},
  { path: 'planning', component: PlanningMissionComponent},
  { path: 'primes', component: PrimesComponent},
  { path: 'saisie-notes', component: SaisieNoteComponent},
  { path: 'validation', component: ValidationMissionComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    VisualisationNatureComponent,
    CreationNatureComponent,
    CreationNatureDirective,
    MenuComponent,
    AcceuilComponent,
    CollegueComponent,
    PlanningMissionComponent,
    PrimesComponent,
    SaisieNoteComponent,
    ValidationMissionComponent,
    VisualisationMissionComponent,
    DemandeMissionComponent,
    ModifMissionComponent

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
  }],
  bootstrap: [AppComponent],
  entryComponents: [CreationNatureComponent]

})
export class AppModule { }
