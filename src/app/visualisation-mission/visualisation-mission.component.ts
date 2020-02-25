import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-visualisation-mission',
  templateUrl: './visualisation-mission.component.html',
  styles: []
})
export class VisualisationMissionComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Gestion de missions - GDM' );
  }

}
