import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Mission } from '../models/mission';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-validation-mission',
  templateUrl: './validation-mission.component.html',
  styles: []
})
export class ValidationMissionComponent implements OnInit {

  listemissions: Mission[];

  constructor(private titleService: Title, private dataService: DataService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Validation - GDM');


    this.dataService.getMissions().subscribe(
      (listeMissions: Mission[]) => {
      this.listemissions = listeMissions;
      },
      error => console.log(error));
  }
}
