import { Component, OnInit,TemplateRef } from '@angular/core';
import { Mission } from '../models/mission';
import { Title } from '@angular/platform-browser';
import { VisualiserMissionService } from './visualiser-mission.service';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-visualiser-mission',
  templateUrl: './visualiser-mission.component.html',
  styles: []
})
export class VisualiserMissionComponent implements OnInit {

missions: Observable< Mission[]>;
idMissionASupprimer: number;
phaseModifier: boolean;
isError: boolean;
modalRef: BsModalRef;
miss: Observable<string[]>;

  constructor(private titleService: Title,
    private visualiserMissionService: VisualiserMissionService, private modalService: BsModalService) { }

  ngOnInit() {
    this.titleService.setTitle( 'Gestion des missions - GDM' );

    //this.visualiserMissionService.getMissions().subscribe(data => this.missions = this.missions);


  }

  openModal(template: TemplateRef<any>, idMission: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.idMissionASupprimer = idMission;
  }

  confirm() {
    this.deleteMission();
    this.modalRef.hide();
  }

  decline() {
    this.idMissionASupprimer = undefined;
    this.modalRef.hide();
  }

  deleteMission() {
    this.visualiserMissionService.deleteMission(this.idMissionASupprimer).subscribe(() => {
      this.ngOnInit();
      this.idMissionASupprimer = undefined;
    }, (error: HttpErrorResponse) => {
      this.isError = true;
    });
  }
}
