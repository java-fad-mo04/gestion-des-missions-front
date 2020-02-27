import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mission } from '../models/mission';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  rechercherParId(id : number): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(url +'/missions'+ id)
    
  }
  
changerMission(modif: Mission) 
  {  return this.httpClient.patch<void>(url +'/missions', modif);
  
}

  getMissions(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`${url}mission`, {withCredentials: true});
  }

  addMission(mission: Mission): Observable<Mission>{
    return this.httpClient.post<Mission>(`${url}mission`, mission,{withCredentials: true});
  }

  getNatures(): Observable<Nature[]> {
    return this.httpClient.get<Nature[]>(`${url}nature`, {withCredentials: true});
}

  getTransport(): Observable<Transport[]> {
    return this.httpClient.get<Transport[]>(`${url}transport`, {withCredentials: true});
  }

}