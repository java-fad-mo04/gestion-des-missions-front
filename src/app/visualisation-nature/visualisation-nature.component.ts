import { Component, OnInit } from '@angular/core';
import { VisualisationNatureService } from './visualisation-nature.service';
import { Nature } from '../models/nature';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CreationNatureComponent } from '../creation-nature/creation-nature.component';
import { ModifierNatureComponent } from '../modifier-nature/modifier-nature.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-visualisation-nature',
  template: `<app-menu></app-menu>

 <div class="row">
 <table class="table table-striped text-center">
  <thead>
    <tr>
      <th scope="col">Nature</th>
      <th scope="col">Facturée</th>
      <th scope="col">Prime</th>
      <th scope="col">TJM(€)</th>
      <th scope="col">% Prime</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody  >
    <tr *ngFor="let nature of listeNature">
      <td>{{nature.libelle}}</td>
      <td *ngIf="nature.estFacture else facture">Oui</td>

<ng-template #facture>
<td>Non</td>
</ng-template>
<td *ngIf="nature.estPrime else prime">Oui</td>
<ng-template #prime>
<td>Non</td>
</ng-template>
      <td *ngIf="nature.tjm else tjm">{{nature.tjm}}</td>
      <ng-template #tjm>
<td>-</td>
</ng-template>
      <td *ngIf="nature.valeurPrime else valeurPrime">{{nature.valeurPrime}}</td>
      <ng-template #valeurPrime>
<td>-</td>
</ng-template>
      <td>
      <img src="../assets/images/edit-symbol.png" width="20px" (click)="openModifier(nature.id)">

      <img src="../assets/images/bin.png" width="20px" >
      </td>
    </tr>
  </tbody>
</table>



</div>
<div class="row">
<div class="col-3 offset-8 text-right pt-1">
  Ajouter une nature de mission
</div>
<div class="col-1 text-right">
<button type="button" class="btn btn-primary" (click)="openCreate()">
+
</button>
</div>
</div>
{{msgRetour}}
  `,
  styles: []
})
export class VisualisationNatureComponent implements OnInit {


  modalOptions: NgbModalOptions;
  msgRetour: string;

  listeNature: Nature[];

  constructor(private visuServ: VisualisationNatureService, private modalService: NgbModal, private titleService: Title) {

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };

  }

  ngOnInit() {
    this.titleService.setTitle( 'Gestion de missions - GDM' );

    this.visuServ.recuperationNature().subscribe((nature: Nature[]) => {
      this.listeNature = nature;
    }, error => console.log(error));

  }
  openCreate() {
    this.modalService.open(CreationNatureComponent);
  }

  openModifier(id: number) {

    let nat: Nature;


    for (const nature of this.listeNature) {
      if (nature.id === id) {

        nat = nature;
      }
    }


    const modal = this.modalService.open(ModifierNatureComponent);
    modal.componentInstance.nature = nat;

  }

}




