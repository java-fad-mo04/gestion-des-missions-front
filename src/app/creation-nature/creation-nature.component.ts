import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Nature } from '../models/nature';
import { CreationNatureService } from './creation-nature.service';
import { VisualisationNatureComponent } from '../visualisation-nature/visualisation-nature.component';



@Component({
  selector: 'app-modal-creation-nature',
  template: `


<div class="modal-header">
    <h4 class="modal-title">Ajout d'une nature de mission</h4>
</div>
  <div class="modal-body">
  <form #natureForm="ngForm" >
    <div class="card">
<div class="card-body">
<div class="row form-group">

  <div class="col-3">
<label for="nature-libelle" class="control-label">Nature</label>
</div>
<div class="col-6">
      <input id="nature-libelle" type="text" class="form-control" name="libelle" minlength="2" [ngClass]="{'is-valid':libelle.valid ,'is-invalid':libelle.invalid && libelle.dirty}" [(ngModel)]="nature.libelle" #libelle="ngModel" size="2" required/>
</div>

</div>

<div class="row form-group">

<div class="col-3">
<label for="nature-facture">Facturée</label>
</div>

<div class="col-4 ">
      <select id="nature-facture" class="custom-select" name="estFacture" [(ngModel)]="nature.estFacture" [ngClass]="{'is-valid':estFacture.valid}"  #estFacture required>
        <option name="estFacture" value="true">OUI</option>
        <option name="estFacture" value="false">NON</option>
      </select>
</div>

<div class="row" *ngIf="estFacture.value === 'true'">
<div class="col-5">
  <label for="nature-tjm" class="control-label">TJM (€)</label>
  </div>
  <div class="col">
        <input name="tjm" id="nature-tjm" pattern="[0-9]{1,}" size="4" type="text" [ngClass]="{'is-valid':tjm.valid ,'is-invalid':tjm.invalid}" class="form-control" [(ngModel)]="nature.tjm" #tjm="ngModel" required/>
        </div>
  </div>

</div>

<div class="row form-group">

  <div class="col-3">
<label for="nature-prime">Versement prime </label>
  </div>

  <div class="col-4">
    <select id="nature-prime" class="custom-select" name="estPrime"  [(ngModel)]="nature.estPrime" #estPrime required>
      <option name="estPrime" value="true">OUI</option>
      <option name="estPrime" value="false">NON</option>
    </select>
  </div>

  <div class="row" *ngIf="estPrime.value === 'true'">
  <div class="col-5">
  <label for="nature-primeValue" class="control-label">% Prime</label>
  </div>
  <div class="col">
      <input name="primeValue" type="text" id="nature-primeValue" appCreationNature size="4" [ngClass]="{'is-valid':primeValue.valid ,'is-invalid':primeValue.invalid}" class="form-control" [(ngModel)]="nature.valeurPrime" #primeValue="ngModel" required/>
</div>
  </div>

</div>


</div>

</div>

    </form>
</div>



  <div class="modal-footer">

    <button type="button" class="btn btn-danger"  (click)="activeModal.close('Close click')">Annuler</button>
    <button type="button" class="btn btn-success"  (click)="createNature()" [ngClass]="{'disabled': natureForm.invalid}">Valider</button>
  </div>

  `,
  styles: []
})
export class CreationNatureComponent implements OnInit {

  nature: Nature = {};

  msgRetour: string;

  constructor(public activeModal: NgbActiveModal, private dataServ: CreationNatureService, private modalService: NgbModal) { }



  ngOnInit() {
  }

  createNature() {

    this.dataServ.createNature(this.nature).subscribe((msg: string) => {

      this.msgRetour = msg;

      this.activeModal.close();


    }, error => {
      this.msgRetour = error.error;

      this.activeModal.close();

    });



  }

}
