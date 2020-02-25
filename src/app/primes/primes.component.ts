import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styles: []
})
export class PrimesComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Primes - GDM' );
  }

}
