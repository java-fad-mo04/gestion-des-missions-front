import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteDeFraisService } from '../note-de-frais/note-de-frais.service';
import { NoteDeFrais, NatureLigne, LigneDeFrais } from '../models/ligne-frais';
import { Mission } from '../models/mission';


@Component({
    selector: 'app-note-de-frais',
    templateUrl: './note-de-frais.component.html',
    styleUrls: ['./note-de-frais.component.css']
  })

  export class NoteDeFraisComponent implements OnInit {
    id: string;
    errMsg: string;
    missions: Mission[];
    noteDeFrais: NoteDeFrais;
    enum: NatureLigne[];
    selectedLigneDeFrais: LigneDeFrais = new LigneDeFrais(null, null, null, null)
    selectedNoteDeFrais: NoteDeFrais = new NoteDeFrais(null, null, new Mission(null, null, null, null, null, null, null, null, null));

    constructor(private _noteDeFraisSrv: NoteDeFraisService, private route: ActivatedRoute) {
      this.id = route.snapshot.paramMap.get("id");
    }

    ngOnInit() {
        this.noteDeFrais = new NoteDeFrais(null, null, null);
        this._noteDeFraisSrv.findById(this.id)
      }


      // Ajouter une ligne de frais
      initCreate() {
        this.selectedNoteDeFrais = new NoteDeFrais(null, null, new Mission(null, null, null, null, null, null, null, null, null ));
      }
    
    
      // Editer une ligne de frais
      save(noteDeFrais: NoteDeFrais) {
        this.selectedNoteDeFrais = noteDeFrais;
      }

      //suppression d'une ligne de frais
      delete(noteDeFrais: NoteDeFrais) {
        this._noteDeFraisSrv.updateNoteDeFrais(this.selectedNoteDeFrais);
      }
    
      // Sauvegarde à partir de la modale
      new() {
    
        this._noteDeFraisSrv.updateNoteDeFrais(this.selectedNoteDeFrais)
        this.ngOnInit();
      }

}
