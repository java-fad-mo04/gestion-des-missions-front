import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Mission } from '../models/mission';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-validation-mission',
  templateUrl: './validation-mission.component.html',
  styles: []
})
export class ValidationMissionComponent implements OnInit {

  mission: Mission;
  listemissions: Mission[];
  missions: Mission[];
  missionSubscription: Subscription;

  constructor(private titleService: Title, private _dataService: DataService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Validation - GDM');

    this._dataService.getMissionsObservable().subscribe((listeMissions: Mission[]) => {
      this.missions = listeMissions;
    },
    error => console.log(error));
    this._dataService.getMissions();


    }
  validerMission() {
    this.mission.status = 'VALIDEE';
    this._dataService.modifierMission(this.mission).subscribe(
      () => {

      },
      error => console.log(error));
  }

  rejeterMission() {
    this.mission.status = 'REJETEE';
    this._dataService.modifierMission(this.mission).subscribe(
      () => {

      },
      error => console.log(error));
    }
}
