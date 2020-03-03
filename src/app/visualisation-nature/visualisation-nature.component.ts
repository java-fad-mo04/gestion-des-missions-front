import { Component, OnInit } from '@angular/core';
import { Nature } from '../models/nature';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CreationNatureComponent } from '../creation-nature/creation-nature.component';
import { ModifierNatureComponent } from '../modifier-nature/modifier-nature.component';
import { Title } from '@angular/platform-browser';
import { Subject, Subscription } from 'rxjs';
import { DeleteNatureComponent } from '../delete-nature/delete-nature.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-visualisation-nature',
  templateUrl: './visualisation-nature.component.html',
  styles: []
})
export class VisualisationNatureComponent implements OnInit {
  modalOptions: NgbModalOptions;
  msgRetour: string;

  listeNature: Nature[];
  listeNatureSubscription: Subscription;

  constructor(private _dataService: DataService, private _modalService: NgbModal, private _titleService: Title) {

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };

  }

  ngOnInit() {
    this._titleService.setTitle('Gestion de missions - GDM');


    this.listeNatureSubscription = this._dataService.natureSubject.subscribe(
      (nature: Nature[]) => {
        this.listeNature = nature;
      }
    );
      this._dataService.emitListeNat();
  }

  openCreate() {
    this._modalService.open(CreationNatureComponent);
  }

  openDelete(nat: Nature) {

    const modal = this._modalService.open(DeleteNatureComponent);
    modal.componentInstance.nature = nat;
  }


  openModifier(nat: Nature) {

    const modal = this._modalService.open(ModifierNatureComponent);
    modal.componentInstance.nature = nat;

  }

}




