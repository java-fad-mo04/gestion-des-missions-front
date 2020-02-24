import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { GestionMissionService} from './gestion-mission.service';
import { TransportService } from '../transport/transport.service';
import { NatureService } from '../nature/nature.service';
import { Collegue } from '../auth/auth.domains';

import { Nature } from '../models/nature';
import { Transport } from '../models/transport';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-gestion-mission',
  templateUrl: './gestion-mission.component.html',
  styles: []
})
export class GestionMissionComponent implements OnInit {

  isError: boolean;
  missions: Mission[];
  nature: Nature;
  mission: Mission;
  natures: Nature[];
 // mission= new MissionDTO(0, new Date,new Date,0, '','',0, '', 0);
  constructor(private gestionMissionService: GestionMissionService, private natureService: NatureService,
     private transportService: TransportService) { }

  ngOnInit() {
    this.gestionMissionService.getMissions().subscribe(
      ( listeMissions: Mission[]) => {this.missions = listeMissions;
  },
     error => console.log(error));


  }

}
