import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { Mission } from '../models/mission';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delete-mission',
  templateUrl: './delete-mission.component.html',
  styles: []
})
export class DeleteMissionComponent implements OnInit {

  @Input() mission: Mission;
  modalOptions: NgbModalOptions;
  msgRetour: string;

  constructor(private _dataService: DataService, public activeModal: NgbActiveModal, private _modalService: NgbModal) {
      this.modalOptions = {
        backdrop: 'static',
        backdropClass: 'customBackdrop'
      };
    }

  ngOnInit() {
  }

  annuler() {
    this.activeModal.close('Close click');
  }
  updateWin(){
    window.location.reload();
  }

  confirmer() {
    this._dataService.deleteMission(this.mission.id).subscribe((msg: string) => {

      this.msgRetour = msg;
      this.activeModal.close();
      const modal = this._modalService.open(MsgBoxComponent);
      modal.componentInstance.msg = this.msgRetour;
      //this.updateWin();
    }, error => {
      this.msgRetour = error.error;
      this.activeModal.close();
      const modal = this._modalService.open(MsgBoxComponent);
      modal.componentInstance.msg = this.msgRetour;

    });
  }

}
