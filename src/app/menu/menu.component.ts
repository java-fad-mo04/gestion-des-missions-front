import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  isAdmin: boolean;
  isManager: boolean;

  collegueConnecte: Observable<Collegue>;

  public isMenuCollapsed = true;

  constructor(private _authSrv: AuthService) { }

  ngOnInit() {
    this.collegueConnecte = this._authSrv.collegueConnecteObs;

    this._authSrv.collegueConnecteObs.subscribe(collegueConnecte => {
      console.log(collegueConnecte.roles.includes('ROLE_ADMINISTRATEUR'));
      if (collegueConnecte.roles.includes('ROLE_ADMINISTRATEUR')) {
        this.isAdmin = true;
        console.log(this.isAdmin);
      }
      if (collegueConnecte.roles.includes('ROLE_MANAGER')) {
        this.isManager = true;
      }
    }, (error: HttpErrorResponse) => {

    });
  }
   // isAdmin() {
  //   this.collegueConnecteRole = this._authSrv.collegueConnecteObs;

  // }

  // isManager() {
  //   this.collegueConnecteRole = this._authSrv.collegueConnecteObs;

  // }

}
