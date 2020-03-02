import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs/internal/Observable';
import {Collegue} from '../auth/auth.domains';
import {Router} from '@angular/router';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styles: []
})
export class CollegueComponent implements OnInit {
  collegue: Collegue;

  constructor(private _authSrv: AuthService, private _router: Router) { }

  ngOnInit() {
    this._authSrv.verifierAuthentification().subscribe(col => this.collegue = col);
  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/auth'])
    );
  }
}
