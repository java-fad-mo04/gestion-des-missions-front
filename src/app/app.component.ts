import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {Collegue} from "./auth/auth.domains";
import {ModifmissionComponent} from "./modifmission/modifmission.component";


/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  template: `<link rel="icon" type="image/x-icon" href="favicon.ico" /><router-outlet></router-outlet> `,
  styles: []

})
export class AppComponent implements OnInit {

  collegueConnecte: Observable<Collegue>;

  constructor(private _authSrv: AuthService, private _router: Router) {

  }




  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {

    this.collegueConnecte = this._authSrv.collegueConnecteObs;
  }

}
