import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';
import { Mission } from '../models/mission';
import { Collegue } from '../models/collegue';

@Injectable({
  providedIn: 'root'
})
export class DemandeMissionService {

  constructor(private httpClient: HttpClient) { }

  getNatures(): Observable<Nature[]> {
    return this.httpClient.get<Nature[]>(`${environment.baseUrl}nature`, {withCredentials: true});
}

getTransport(): Observable<Transport[]> {
  return this.httpClient.get<Transport[]>(`${environment.baseUrl}transport`, {withCredentials: true});
}

addMission(mission: Mission): Observable<Mission>{
  return this.httpClient.post<Mission>(`${environment.baseUrl}mission`, mission);
}

}
