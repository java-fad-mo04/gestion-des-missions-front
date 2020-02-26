import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styles: []
})
export class AcceuilComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Acceuil - GDM' );
  }

}
