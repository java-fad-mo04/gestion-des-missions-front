import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planning-mission',
  templateUrl: './planning-mission.component.html',
  styles: []
})
export class PlanningMissionComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Planning - GDM' );
  }

}
