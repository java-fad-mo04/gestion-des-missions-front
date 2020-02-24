import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Mission } from '../models/mission';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { DemandeMissionService } from './demande-mission.service';
import { Observable, Subject } from 'rxjs';
import { TransportService } from '../transport/transport.service';
import { Collegue } from '../auth/auth.domains';
import {tap, catchError} from 'rxjs/operators';


@Component({
  selector: 'app-demande-mission',
  templateUrl: './demande-mission.component.html',
  styles: [],
  providers: [DatePipe]
})
export class DemandeMissionComponent implements OnInit, OnChanges {

  dateCourante = new Date();
  // today = new Date().toJSON().split('T')[0];
  today = '2019-08-22';

  listeNatures: Nature[];
  natures: Observable<string[]>;
  isError: boolean;
  hidden = false;
  listeTransport: Transport[];
  transports: Observable<string[]>;
  collegue: Collegue;
  transport: Transport;
  nature: Nature;
  mission = new Mission(0, new Date(), new Date(), null, '', '', null, '', null);

  collegueConnecte: Observable<Collegue>;
  subjectCollegue = new Subject<Collegue>();


  constructor(private demandeMissionService: DemandeMissionService,
   private _authSrv: AuthService, private transportService: TransportService, private titleService: Title ) {
  }


  ngOnInit() {
    this.titleService.setTitle( "Demande de mission - GDM" );

      this.demandeMissionService.getNatures().subscribe(natures => {
        this.listeNatures = natures;
      }, (error: HttpErrorResponse) => {
      this.isError = true;
      });

    this.demandeMissionService.getTransport().subscribe(transports => {
      this.listeTransport = transports;
    }, (error: HttpErrorResponse) => {});

   this._authSrv.collegueConnecteObs.subscribe(collegue => this.collegue = collegue);
  }

    ngOnChanges(changes: SimpleChanges): void {
      // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      // Add '${implements OnChanges}' to the class.
    }

test(){
}

    creer() {
      this.mission.collegue = this.collegue;
      this.demandeMissionService.addMission(this.mission).subscribe(() => {}, error => {console.log(`Mission n'a pas été créé`); })
    }
  }
