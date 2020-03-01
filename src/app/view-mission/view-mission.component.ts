import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Mission } from '../models/mission';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import * as moment from 'moment';

@Component({
  selector: 'app-view-mission',
  templateUrl: './view-mission.component.html',
  styles: []
})
export class ViewMissionComponent implements OnInit {
  @Input() mission: Mission;
  modalOptions: NgbModalOptions;
  msgRetour: string;
  prime: number;
  constructor(private _dataService: DataService, public activeModal: NgbActiveModal, private _modalService: NgbModal) {

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {

    let date1 = moment(this.mission.dateDebut);
    let date2 = moment(this.mission.dateFin);
    let diffInDays = Math.abs(date1.diff(date2, 'days'));
    this.prime = this.mission.nature.valeurPrime * diffInDays * this.mission.nature.tjm/100;

  }

fermer(){
  this.activeModal.close('Close click')
}

}
