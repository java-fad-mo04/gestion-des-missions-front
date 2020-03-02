import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: []
})
export class AccueilComponent implements OnInit {

  constructor(private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle( 'Accueil - GDM' );
  }

}
