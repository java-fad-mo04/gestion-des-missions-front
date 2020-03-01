import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {Collegue} from './auth/auth.domains';

/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  template: `<link rel="icon" type="image/x-icon" href="favicon.ico" /><router-outlet></router-outlet> `,
  styles: []

})
export class AppComponent implements OnInit {

  collegue: Collegue;

  constructor(private _authSrv: AuthService, private _router: Router) {

  }




  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {

    this._authSrv.collegueConnecteObs.subscribe(col => this.collegue = col);
  }

}
