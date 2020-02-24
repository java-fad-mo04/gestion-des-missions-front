import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nature } from '../models/nature';
import { NatureService } from './nature.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styles: []
})
export class NatureComponent implements OnInit {

  constructor(private natureService: NatureService) { }
  listeNatures: Nature[];
  natures: Observable<string[]>;
  isError: boolean;

  ngOnInit() {
    this.natureService.getNatures().subscribe(
      natures => {
        this.listeNatures = natures;
      },
        (error: HttpErrorResponse) => {
          this.isError = true;
        });
  }

}
