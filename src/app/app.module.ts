import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { VisualisationNatureComponent } from './visualisation-nature/visualisation-nature.component';
import { CreationNatureComponent } from './creation-nature/creation-nature.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreationNatureDirective } from './creation-nature/creation-nature.directive';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'nature', component: VisualisationNatureComponent },
  { path: '', redirectTo: '/tech', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    VisualisationNatureComponent,
    CreationNatureComponent,
    CreationNatureDirective

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
