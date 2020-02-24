import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataService } from '../service/service.component';
import { Mission } from '../mission/Mission';

@Component({
  selector: 'app-modifmission',
  templateUrl: './modifmission-component.html'
})
export class ModifmissionComponent implements OnInit {
  isSubmitted = false;
  rectiMission: Mission = {}
  messageErreur: string;
  messageOk: string;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  abandonnerModif() {
   
    { console.log('Abandon des modifications') }
  }

  enregistrerModif(etatForm: NgForm) {
    this.messageErreur = null;
    this.messageOk = null;
    this.dataservice.changerMission(this.rectiMission)
      .subscribe(
        () => {
          this.messageOk = 'Les modifications ont bien été prises en compte';
          etatForm.reset();
          console.log('Modification de la mission')
        },
        error => {
          this.messageErreur = `Erreur : Impossible de valider la mission`

        })
  }
}

