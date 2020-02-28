import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Mission } from '../models/mission';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { CommonModule } from '@angular/common';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';

@Component({
  selector: 'app-modifmission',
  templateUrl: './modifmission.component.html'
})
export class ModifmissionComponent implements OnInit {

  @Input() mission: Mission;
  modalOptions: NgbModalOptions;
  msgRetour: string;
  submitted = false;
  natures:  Nature[];
  transports: Transport[];

  constructor(private _dataService: DataService, public activeModal: NgbActiveModal, private _modalService: NgbModal) {

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
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

  onSubmit() {
    this.submitted = true;
  }

  /*$scope.flipBetweenEditMode = function (isReadOnlyMode) {
    if (!isReadOnlyMode) {
        $scope.EditUserForm.$rollbackViewValue();
    }
    console.log(isReadOnlyMode);
    $scope.isReadOnlyMode = !isReadOnlyMode;
};*/


  annuler() {
    this.activeModal.close('Close click');
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

