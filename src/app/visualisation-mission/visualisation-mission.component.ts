import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { DataService } from '../services/data.service';
import { ModifmissionComponent } from '../modifmission/modifmission.component';
import { Mission } from '../models/mission';
import { DemandeMissionComponent } from '../demande-mission/demande-mission.component';
import { ViewMissionComponent } from '../view-mission/view-mission.component';
import { DeleteMissionComponent } from '../delete-mission/delete-mission.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MsgBoxComponent } from '../msg-box/msg-box.component';

@Component({
  selector: 'app-visualisation-mission',
  templateUrl: './visualisation-mission.component.html',
  styles: []
})
export class VisualisationMissionComponent implements OnInit {

  modalOptions: NgbModalOptions;
  msgRetour: string;
  missions: Mission[];
  mission: Mission;
  constructor(private _titleService: Title, private _dataService: DataService,
    private _modalService: NgbModal) {

      this.modalOptions = {
        backdrop: 'static',
        backdropClass: 'customBackdrop'
      };
  }

  ngOnInit() {
    this._titleService.setTitle( 'Gestion de missions - GDM' );

    this._dataService.getMissions().subscribe(
      (listeMissions: Mission[]) => {this.missions = listeMissions;
  },
     error => console.log(error));
  }

  openEdit(id: number) {
    let miss: Mission;
    for (const mission of this.missions) {
      if (mission.id === id) {
        miss = mission;
      }
    }
    const modal = this._modalService.open(ModifmissionComponent);
    modal.componentInstance.mission = miss;
  }

  openCreate() {
    this._modalService.open(DemandeMissionComponent);
  }

  openDelete(id: number) {
    let miss: Mission;
    for (const mission of this.missions) {
      if (mission.id === id) {
        miss = mission;
      }
    }
    const modal = this._modalService.open(DeleteMissionComponent);
    modal.componentInstance.mission = miss;
  }

  openView(id: number) {
    let miss: Mission;
    for (const mission of this.missions) {
      if (mission.id === id) {
        miss = mission;
      }
    }
    const modal = this._modalService.open(ViewMissionComponent);
    modal.componentInstance.mission = miss;
  }
}
