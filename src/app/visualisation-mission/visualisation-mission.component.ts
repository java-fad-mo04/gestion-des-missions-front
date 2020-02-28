import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { DataService } from '../services/data.service';

import { Mission } from '../models/mission';

@Component({
  selector: 'app-visualisation-mission',
  templateUrl: './visualisation-mission.component.html',
  styles: []
})
export class VisualisationMissionComponent implements OnInit {

  missions: Mission[];

  constructor(private titleService: Title, private dataService: DataService) { }

  ngOnInit() {
    this.titleService.setTitle( 'Gestion de missions - GDM' );

    this.dataService.getMissions().subscribe(
      ( listeMissions: Mission[]) => {this.missions = listeMissions;
  },
     error => console.log(error));
  }

}
