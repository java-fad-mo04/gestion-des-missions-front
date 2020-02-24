import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../models/transport';
import { TransportService} from './transport.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styles: []
})
export class TransportComponent implements OnInit {
  listeTransport: Transport[];
  transports: Observable<string[]>;
  isError: boolean;

  constructor(private transportService: TransportService) { }

  ngOnInit() {
     this.transportService.getTransport().subscribe(transports => {
      this.listeTransport = transports;
    },
      (error: HttpErrorResponse) => {
        this.isError = true;
    });
  }

}
