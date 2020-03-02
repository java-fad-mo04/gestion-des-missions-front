import { Component, OnInit, Input } from '@angular/core';
import { Nature } from '../models/nature';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-nature',
  template: `
   <div class="modal-header">
    <h4 class="modal-title">Modification d'une nature de mission</h4>
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
      <input id="nature-libelle" type="text" class="form-control" name="libelle"
      minlength="2"
      [ngClass]="{'is-valid':libelle.valid ,'is-invalid':libelle.invalid && libelle.dirty}"
      [(ngModel)]="nature.libelle" #libelle="ngModel" size="2" required disabled="disabled"/>
</div>

</div>

<div class="row form-group">

<div class="col-3">
<label for="nature-facture">Facturée</label>
</div>

<div class="col-4">
      <select id="nature-facture" class="custom-select" name="estFacture"
      [(ngModel)]="nature.estFacture" [ngClass]="{'is-valid':estFacture.valid}"  #estFacture required>
        <option name="estFacture" [ngValue]="true">OUI</option>
        <option name="estFacture" [ngValue]="false">NON</option>
      </select>
</div>

<div class="row" *ngIf="nature.estFacture == true">
<div class="col-5">
  <label for="nature-tjm" class="control-label">TJM (€)</label>
  </div>
  <div class="col">
        <input name="tjm" id="nature-tjm" pattern="[0-9]{1,}" size="4" type="text"
        [ngClass]="{'is-valid':tjm.valid ,'is-invalid':tjm.invalid}"
         class="form-control" [(ngModel)]="nature.tjm" #tjm="ngModel" required/>
        </div>
  </div>

</div>

<div class="row form-group">

  <div class="col-3">
<label for="nature-prime">Versement prime </label>
  </div>

  <div class="col-4">
    <select id="nature-prime" class="custom-select" name="estPrime"  [(ngModel)]="nature.estPrime" #estPrime required>
      <option name="estPrime" [ngValue]="true" >OUI</option>
      <option name="estPrime" [ngValue]="false" >NON</option>
    </select>
  </div>

  <div class="row" *ngIf="nature.estPrime == true">
  <div class="col-5">
  <label for="nature-primeValue" class="control-label">% Prime</label>
  </div>
  <div class="col">
      <input name="primeValue" type="text" id="nature-primeValue" appCreationNature size="4"
      [ngClass]="{'is-valid':primeValue.valid ,'is-invalid':primeValue.invalid}"
      class="form-control" [(ngModel)]="nature.valeurPrime" #primeValue="ngModel" required/>
</div>
  </div>

</div>


</div>

</div>

    </form>
</div>



  <div class="modal-footer">

    <button type="button" class="btn btn-danger"  (click)="activeModal.close('Close click')">Annuler</button>
    <button type="button" class="btn btn-success"  [ngClass]="{'disabled': natureForm.invalid}" (click)="modifierNature()">Valider</button>
  </div>
  `,
  styles: []
})


export class ModifierNatureComponent implements OnInit {

  @Input() nature: Nature;

  modalOptions: NgbModalOptions;

  msgRetour: string;

  constructor(public activeModal: NgbActiveModal, private _dataService: DataService, private _modalService: NgbModal) {

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };

  }

  ngOnInit() {

  }


  modifierNature() {

    this._dataService.modifierNature(this.nature).subscribe((msg: string) => {

      this.msgRetour = msg;
      this.activeModal.close();
      this._dataService.emitListeNat();
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
