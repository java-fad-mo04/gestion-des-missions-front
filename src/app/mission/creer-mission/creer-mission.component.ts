import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MissionDto } from './models/mission-dto';
import { NatureDto } from './models/nature-dto';
import { CollegueDto } from './models/collegue-dto';
import { CreerMissionService } from './creer-mission.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-creer-mission',
  templateUrl: './creer-mission.component.html',
  styles: [],
  providers: [DatePipe]
})
export class CreerMissionComponent implements OnInit, OnChanges {

  dateCourante = new Date();
  // today = new Date().toJSON().split('T')[0];
  today = '2019-08-22';

  listeNatures: NatureDto[];

  isError: boolean;

  mission = new MissionDto(0, new Date(), new Date(), null, '', '', '', '', null);

  constructor(private creerMissionService: CreerMissionService, private _authSrv: AuthService) {
  }

  ngOnInit() {
    this.creerMissionService.getNatures().subscribe(natures => {
      this.listeNatures = natures;
      this._authSrv.collegueConnecteObs.subscribe(collegueConnecte => {
        this.mission.collegue = collegueConnecte;
      }, (error: HttpErrorResponse) => {});
    }, (error: HttpErrorResponse) => {
      this.isError = true;
    });
  }

    ngOnChanges(changes: SimpleChanges): void {
      // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      // Add '${implements OnChanges}' to the class.
    }

    test() {
      console.log(this.mission.endDate);
    }
  }

}
