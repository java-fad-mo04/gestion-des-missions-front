import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-msg-box',
  template: `
<div class="modal-header">
      <h4 class="modal-title">Message de retour</h4>
  </div>
  <div class="modal-body">
    <p>{{msg}}</p>
</div>
<div class="modal-footer">

    <button type="button" class="btn btn-success"  (click)="activeModal.close('Close click')">Fermer</button>

  </div>


  `,
  styles: []
})
export class MsgBoxComponent implements OnInit {

  @Input() msg: string;



  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit() {

  }

}
