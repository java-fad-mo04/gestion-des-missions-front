import { Injectable, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { Transport } from '../models/transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  //subjectTransport = new Subject<Transport>();
  constructor(private httpClient: HttpClient) { }

  getTransport(): Observable<Transport[]> {
    return this.httpClient.get<Transport[]>(`${environment.baseUrl}transport`, {withCredentials: true});
  }

  getTransportById(id: number): Observable<Transport[]> {
    return this.httpClient.get<Transport[]>(`${environment.baseUrl}transport?id=${id}`, {withCredentials: true});
  }
}
