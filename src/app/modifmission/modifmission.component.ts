import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataService } from '../service/service.component';
import { Mission } from '../models/mission';
import { Transport } from '../models/transport';
import { Nature } from '../models/nature';

@Component({
  selector: 'app-modifmission',
  templateUrl: './modifmission-component.html'
})
export class ModifmissionComponent implements OnInit {
  isSubmitted = false;
  rectiMission: Mission = {}
  messageErreur: string;
  messageOk: string;
  listetransport: Transport[];
  listenature: Nature[];
  transportId: number;
  natureId: number;
  missionId : number;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.afficherMission(this.missionId);
    this.recupNature();
    this.recupTransport();
  }

  abandonnerModif() {

    { console.log('Abandon des modifications') }
  }
  recupNature() {
    this.dataservice.recupNature().subscribe((nature: Nature[]) => { this.listenature = nature; console.log(this.listenature) })

  };


  recupTransport() {
    this.dataservice.recupTransport().subscribe((transport: Transport[]) => { this.listetransport = transport; console.log(this.listetransport) })

  };

  afficherMission(idMission: number) {
    this.messageErreur = null;
    this.messageOk = null;
    this.dataservice.rechercherParId(idMission)
      .subscribe(
        (mission: Mission) => {
          this.rectiMission = mission;
          this.messageOk = 'Veuillez modifier la mission';
          console.log(mission)
        },
        error => {
          this.messageErreur = `Erreur : Impossible d'afficher la mission`

        })
  }
  enregistrerModif() {
    this.messageErreur = null;
    this.messageOk = null;
    for (let transport of this.listetransport) {
      if (transport.id === this.transportId) {
        this.rectiMission.transport = transport;

      }

    } for (let nature of this.listenature) {
      if (nature.id === this.natureId) {
        this.rectiMission.transport = nature;

      }
    }
    console.log(this.rectiMission);
    this.dataservice.changerMission(this.rectiMission)
      .subscribe(
        message => {
          this.messageOk = 'Les modifications ont bien été prises en compte';

          console.log('Modification de la mission')},
          error => {
            this.messageErreur = `Erreur : Impossible de valider la mission`
            console.log('Erreur')
          })
  }
}

