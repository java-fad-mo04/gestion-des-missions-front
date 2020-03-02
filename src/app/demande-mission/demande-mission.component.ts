import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { Mission } from '../models/mission';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';
import { Collegue } from '../auth/auth.domains';
import * as moment from 'moment';

@Component({
  selector: 'app-demande-mission',
  templateUrl: './demande-mission.component.html',
  styles: []
})
export class DemandeMissionComponent implements OnInit {
  modalOptions: NgbModalOptions;
  msgRetour: string;
  submitted = false;
  hidden = true;
  natures:  Nature[];
  transports: Transport[];
  collegue: Collegue;
  primes: number;
  mission = new Mission(0, new Date(), new Date(), null, '', '', null, null, null);

  constructor(private _titleService: Title, private _dataService: DataService, private _authSrv: AuthService,
    private _router: Router, public activeModal: NgbActiveModal, private _modalService: NgbModal) {
      this.modalOptions = {
        backdrop: 'static',
        backdropClass: 'customBackdrop'
      };
    }

  ngOnInit() {
    this._titleService.setTitle( 'Demande de mission - GDM' );

    this._authSrv.collegueConnecteObs.subscribe(col => {
      this.collegue = col;
      }, error => {console.log(error);
    });

    this._dataService.getNatures().subscribe(nats => {
      this.natures = nats;
    }, (error) => {
      console.log(error);
    });

    this._dataService.getTransport().subscribe(trs => {
      this.transports = trs;
    }, (error) => {
      console.log(error);
    });
  }

  annuler() {
    this.activeModal.close('Close click');
    this._router.navigate([`gestion-mission`]);
  }

  creer() {
    this.mission.collegue = this.collegue;
    this._dataService.addMission(this.mission).subscribe((msg: string) => {

      this.msgRetour = msg;
      this.activeModal.close();
      const modal = this._modalService.open(MsgBoxComponent);
      modal.componentInstance.msg = this.msgRetour;

    }, error => {
      this.msgRetour = error.error;
      this.activeModal.close();
      const modal = this._modalService.open(MsgBoxComponent);
      modal.componentInstance.msg = this.msgRetour;

    });
  }

  onChange() {
    const date1 = moment(this.mission.dateDebut);
    const date2 = moment(this.mission.dateFin);
    const diffInDays = Math.abs(date1.diff(date2, 'days'));
    this.primes = this.mission.nature.valeurPrime * diffInDays * this.mission.nature.tjm/100;
  }
}
