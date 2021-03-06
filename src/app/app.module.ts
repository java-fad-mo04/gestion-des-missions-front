import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { CreationNatureDirective } from './creation-nature/creation-nature.directive';

import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CreationNatureComponent } from './creation-nature/creation-nature.component';
import { MenuComponent } from './menu/menu.component';
import { ModifierNatureComponent } from './modifier-nature/modifier-nature.component';
import { ModifmissionComponent } from './modifmission/modifmission.component';
import { PlanningMissionComponent } from './planning-mission/planning-mission.component';
import { PrimesComponent } from './primes/primes.component';
import { SaisieNoteComponent } from './saisie-note/saisie-note.component';
import { TechComponent } from './tech/tech.component';
import { ValidationMissionComponent } from './validation-mission/validation-mission.component';
import { VisualisationMissionComponent } from './visualisation-mission/visualisation-mission.component';
import { DemandeMissionComponent } from './demande-mission/demande-mission.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { DeleteNatureComponent } from './delete-nature/delete-nature.component';
import { VisualisationNatureComponent } from './visualisation-nature/visualisation-nature.component';
import { DeleteMissionComponent } from './delete-mission/delete-mission.component';
import { ViewMissionComponent } from './view-mission/view-mission.component';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'nature', component: VisualisationNatureComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestion-mission', component: VisualisationMissionComponent },
  { path: 'planning', component: PlanningMissionComponent },
  { path: 'primes', component: PrimesComponent },
  { path: 'saisie-notes', component: SaisieNoteComponent },
  { path: 'validation', component: ValidationMissionComponent },
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
    ModifierNatureComponent,
    MenuComponent,
    AccueilComponent,
    CollegueComponent,
    PlanningMissionComponent,
    PrimesComponent,
    SaisieNoteComponent,
    ValidationMissionComponent,
    VisualisationMissionComponent,
    DemandeMissionComponent,
    ModifmissionComponent,
    MsgBoxComponent,
    DeleteMissionComponent,
    ViewMissionComponent,
    DeleteNatureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes,
      { enableTracing: true } // <-- debugging
    ),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [CreationNatureComponent, ModifierNatureComponent, DeleteNatureComponent,
    DemandeMissionComponent, DeleteMissionComponent, ModifmissionComponent, ViewMissionComponent, MsgBoxComponent]
})
export class AppModule { }
