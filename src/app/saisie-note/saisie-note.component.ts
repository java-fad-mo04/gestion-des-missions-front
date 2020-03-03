import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { NoteDeFrais, NatureLigne, LigneDeFrais } from '../models/ligne-frais';
import { NoteDeFraisService } from '../note-de-frais/note-de-frais.service';


@Component({
  selector: 'app-saisie-note',
  templateUrl: './saisie-note.component.html',
  styles: []
})
export class SaisieNoteComponent implements OnInit {

  // Liste des notes de frais
  missions: Mission[];
  noteDeFraisTab: NoteDeFrais[];
  noteDeFrais: NoteDeFrais;

  err: string;
  selectedNoteDeFrais: NoteDeFrais = new NoteDeFrais(null, null, new Mission(null, null, null, null, null, null, null, null, null));
  

  constructor(private _noteDeFraisSrv: NoteDeFraisService, private _missionSrv) { }

  ngOnInit() {

    // Lister les notes de frais

    this._missionSrv.listerMission().subscribe(
      tabMission => this.missions = tabMission,
      errServeur => {
        if (errServeur.code && errServeur.message) {
          this.err = errServeur.message;
        } else {
          this.err = 'Erreur côté serveur';
        }
      }
    )
    this._noteDeFraisSrv.listerNoteDeFrais()
      .subscribe(
        tableauNotes => this.noteDeFraisTab = tableauNotes,
        errServeur => {
          if (errServeur.code && errServeur.message) {
            this.err = errServeur.message;
          } else {
            this.err = 'Erreur côté serveur';
          }
        }
      );
  }
  // Mettre à jour une note de frais
  updateClick() {
    this._noteDeFraisSrv.updateNoteDeFrais(this.selectedNoteDeFrais).subscribe(
      (() => {
        for (let i; i < this.noteDeFraisTab.length; i++) {
          if (this.noteDeFraisTab[i].id == this.selectedNoteDeFrais.id) {
            (() => this.noteDeFraisTab = this.noteDeFraisTab.splice(i, 1));
            this.noteDeFraisTab.push(this.selectedNoteDeFrais);
          }
          this.ngOnInit();
        }
      }));

  }
  // Ajouter une ligne de frais
  initCreate() {
    this.selectedNoteDeFrais = new NoteDeFrais(null, null, new Mission(null, null, null, null, null, null, null, null, null));
  }


  // Editer une ligne de frais
  save(noteDeFrais: NoteDeFrais) {
    this.selectedNoteDeFrais = noteDeFrais;
  }


  // Supprimer une ligne de frais
  delete(noteDeFrais: NoteDeFrais) {
    this._noteDeFraisSrv.deleteNoteDeFrais(noteDeFrais).subscribe(
      (() => {
        this.noteDeFraisTab = this.noteDeFraisTab.filter(noteDeFrais1 => !(noteDeFrais1 == this.noteDeFrais))
        this.ngOnInit();
      }));
  }



   // Sauvegarde à partir de la modale
   new() {
    console.log(this.selectedNoteDeFrais)
    this._noteDeFraisSrv.addNoteDeFrais(this.selectedNoteDeFrais).subscribe(

      (() => {
        this.noteDeFraisTab.push(this.selectedNoteDeFrais)
        this.ngOnInit();
      }));
    this.ngOnInit();
  }



}
