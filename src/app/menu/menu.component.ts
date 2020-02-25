import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Collegue } from '../auth/auth.domains';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  isAdmin: boolean;
  isManager: boolean;
  isMenuCollapsed = true;
  collegue: Collegue;

  constructor(private _authSrv: AuthService) { }

  ngOnInit() {
    this._authSrv.collegueConnecteObs.subscribe(collegue => {
      if (this.collegue.roles.includes('ROLE_ADMINISTRATEUR')) {
        this.isAdmin = true;
      }
      if (this.collegue.roles.includes('ROLE_MANAGER')) {
        this.isManager = true;
      }
    }, error => {console.log(error); });
  }

}
