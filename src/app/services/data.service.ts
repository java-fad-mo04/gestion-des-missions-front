import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from '../models/Mission';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`${environment.baseUrl}mission`, {withCredentials: true});
  }

  addMission(mission: Mission): Observable<Mission>{
    return this.httpClient.post<Mission>(`${environment.baseUrl}mission`, mission);
  }

  getNatures(): Observable<Nature[]> {
    return this.httpClient.get<Nature[]>(`${environment.baseUrl}nature`, {withCredentials: true});
}

  getTransport(): Observable<Transport[]> {
    return this.httpClient.get<Transport[]>(`${environment.baseUrl}transport`, {withCredentials: true});
  }
}
