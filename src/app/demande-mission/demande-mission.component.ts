import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-demande-mission',
  templateUrl: './demande-mission.component.html',
  styles: []
})
export class DemandeMissionComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Demande de mission - GDM' );
  }

}
