import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-saisie-note',
  templateUrl: './saisie-note.component.html',
  styles: []
})
export class SaisieNoteComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Saisie note de frais - GDM' );
  }

}
