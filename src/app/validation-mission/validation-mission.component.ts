import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-validation-mission',
  templateUrl: './validation-mission.component.html',
  styles: []
})
export class ValidationMissionComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Validation - GDM' );
  }

}
