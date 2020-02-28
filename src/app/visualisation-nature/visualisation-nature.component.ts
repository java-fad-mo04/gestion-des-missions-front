import { Component, OnInit } from '@angular/core';
import { Nature } from '../models/nature';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CreationNatureComponent } from '../creation-nature/creation-nature.component';
import { ModifierNatureComponent } from '../modifier-nature/modifier-nature.component';
import { Title } from '@angular/platform-browser';
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

  constructor(private _dataService: DataService, private _modalService: NgbModal, private _titleService: Title) {

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };

  }

  ngOnInit() {
    this._titleService.setTitle('Gestion de missions - GDM');

    this._dataService.getNatures().subscribe((nature: Nature[]) => {
      this.listeNature = nature;
    }, error => console.log(error));

  }
  openCreate() {
    this._modalService.open(CreationNatureComponent);
  }

  openModifier(id: number) {
    let nat: Nature;
    for (const nature of this.listeNature) {
      if (nature.id === id) {

        nat = nature;
      }
    }


    const modal = this._modalService.open(ModifierNatureComponent);
    modal.componentInstance.nature = nat;

  }

}




