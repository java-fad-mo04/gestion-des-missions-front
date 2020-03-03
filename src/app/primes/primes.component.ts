import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { Mission } from '../models/mission';
import { Subscription } from 'rxjs';
import { formatDate } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { Collegue } from '../auth/auth.domains';



@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styles: []
})
export class PrimesComponent implements OnInit {

  listeMission: Mission[];
  collegue: Collegue;
  optionYear = new Array;
  anneeMax = parseInt(formatDate(new Date(), 'yyyy', 'en'), 10);
  anneeChoisi: string;

  public chartType: string = 'bar';
  public chartDatasets: Array<any>;
  public chartLabels: Array<any>;
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor(private titleService: Title, private _dataService: DataService, private _authSrv: AuthService) { }

  ngOnInit() {
    this.titleService.setTitle('Primes - GDM');


    this.remplirTabOpt(formatDate(new Date(), 'yyyy', 'en'));

    this._authSrv.collegueConnecteObs.subscribe(col => {
      this.collegue = col;
    }, error => {
      console.log(error);
    });

  }

  remplirChart() {

    // Tableau a remplir pour l'annee choisi
    const tabPrime = [65, 12, 80, 81, 56, 55, 40, 50, 33, 41, 22, 65];

    this.chartDatasets = [
      { data: tabPrime, label: `Primes année ${this.anneeChoisi}` }
    ];
    this.chartLabels = [`janv-${this.anneeChoisi}`, `fev-${this.anneeChoisi}`, `mars-${this.anneeChoisi}`, `avr${this.anneeChoisi}`, `mai-${this.anneeChoisi}`, `juin-${this.anneeChoisi}`, `juil-${this.anneeChoisi}`, `aout-${this.anneeChoisi}`, `sept-${this.anneeChoisi}`, `oct-${this.anneeChoisi}`, `nov-${this.anneeChoisi}`, `dec-${this.anneeChoisi}`];



  }

  remplirTabOpt(max: any) {
    for (let i = parseInt(max, 10); i >= 2015; i--) {
      this.optionYear.push(i);
    }
  }

  prime(mission?: Mission) {

    const dateD = new Date(mission.dateDebut);
    const dateF = new Date(mission.dateFin);

    const jourTravaille = ((dateF.getTime() - dateD.getTime()) / 86400000) + 1;
    console.log(jourTravaille);

    const tjm = mission.nature.tjm;
    const prime = mission.nature.valeurPrime;

    return (jourTravaille * tjm * prime) / 100;


  }

  recupMissionPrime(id: number) {
    this._dataService.getMissionPrime(id, this.anneeChoisi).subscribe((listeMissionPrime: Mission[]) => {
      this.listeMission = listeMissionPrime;
      this.remplirChart();
    });
  }

}
