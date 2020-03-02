import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Nature } from '../models/nature';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delete-nature',
  templateUrl: './delete-nature.component.html',
  styles: []
})
export class DeleteNatureComponent implements OnInit {
  @Input() nature: Nature;
  msgRetour: string;

  modalOptions: NgbModalOptions;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _dataService: DataService) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
  }

  deleteNature() {
    this._dataService.deleteNature(this.nature).subscribe((msg: string) => {

      this.msgRetour = msg;
      this.activeModal.close();
      this._dataService.emitListeNat();
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
