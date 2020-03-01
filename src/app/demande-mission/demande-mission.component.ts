import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

import { Mission } from '../models/mission';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';
import { Collegue } from '../auth/auth.domains';

@Component({
  selector: 'app-demande-mission',
  templateUrl: './demande-mission.component.html',
  styles: []
})
export class DemandeMissionComponent implements OnInit {
  isError: boolean;
  hidden = false;
  listeNatures: Nature[];
  natures: Observable<string[]>;
  listeTransport: Transport[];
  transports: Observable<string[]>;
  collegue: Collegue;
  mission = new Mission(0, new Date(), new Date(), null, '', '', null, null, null);

  constructor(private titleService: Title, private dataService: DataService, private _authSrv: AuthService, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle( 'Demande de mission - GDM' );

    this._authSrv.collegueConnecteObs.subscribe(col => {
      this.collegue = col;
      }, error => {console.log(error);
    });

    this.dataService.getNatures().subscribe(natures => {
      this.listeNatures = natures;
    }, (error) => {
      console.log(error);
    });

  this.dataService.getTransport().subscribe(transports => {
    this.listeTransport = transports;
  }, (error) => {console.log(error)});
  }

  annuler() {
    this.router.navigate([`gestion-mission`]);
  }

  creer() {
    this.mission.collegue = this.collegue;
    this.dataService.addMission(this.mission).subscribe(() => {}, error => {console.log(error); })
  }
}
