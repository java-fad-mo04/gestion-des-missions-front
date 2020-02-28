import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Nature } from '../models/nature';
import { DataService } from '../services/data.service';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-modal-creation-nature',
  templateUrl: './creation-nature.component.html',
  styles: []
})
export class CreationNatureComponent implements OnInit {

  nature: Nature = {};
  modalOptions: NgbModalOptions;

  msgRetour: string;

  constructor(public activeModal: NgbActiveModal, private _dataService: DataService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }



  ngOnInit() {
  }

  createNature() {

    this._dataService.createNature(this.nature).subscribe((msg: string) => {

      this.msgRetour = msg;
      this.activeModal.close();

      const modal = this.modalService.open(MsgBoxComponent);
      modal.componentInstance.msg = this.msgRetour;

    }, error => {
      this.msgRetour = error.error;

      this.activeModal.close();
      const modal = this.modalService.open(MsgBoxComponent);
      modal.componentInstance.msg = this.msgRetour;

    });



  }

}
