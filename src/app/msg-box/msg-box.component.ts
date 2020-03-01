import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styles: []
})
export class MsgBoxComponent implements OnInit {

  @Input() msg: string;



  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit() {

  }

}
