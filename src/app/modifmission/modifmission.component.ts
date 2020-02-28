import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Mission } from '../mission/Mission';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifmission',
  templateUrl: './modifmission-component.html'
})
export class ModifmissionComponent implements OnInit {

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


  modifMission() {

    this._dataService.modifierMission(this.mission).subscribe((msg: string) => {

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

}

