import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from '../models/mission';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }
// Mission
  getMissions(): Observable<Mission[]> {
    return this._httpClient.get<Mission[]>(`${url}mission`, {withCredentials: true});
  }

  getMission(id: number): Observable<Mission[]> {
    return this._httpClient.get<Mission[]>(`${url}mission/${id}`, {withCredentials: true});
  }

  addMission(mission: Mission){
    return this._httpClient.post<string>(`${url}mission`, mission, {responseType: 'text' as 'json' });
  }

  modifierMission(mission: Mission) {
    return this._httpClient.patch<string>(`${url}mission`, mission, {responseType: 'text' as 'json' });
  }

  deleteMission(id: number) {
    console.log(id);
    return this._httpClient.delete<string>(`${url}mission/${id}`, {responseType: 'text' as 'json' });
  }
//Nature
  getNatures(): Observable<Nature[]> {
    return this._httpClient.get<Nature[]>(`${url}nature`, {withCredentials: true});
  }

  createNature(nature: Nature) {
    return this._httpClient.post<string>(`${url}nature`, nature, { responseType: 'text' as 'json' });
  }

  modifierNature(nature: Nature) {
    return this._httpClient.patch<string>(`${url}nature`, nature, { responseType: 'text' as 'json' });
  }
//Transport
  getTransport(): Observable<Transport[]> {
    return this._httpClient.get<Transport[]>(`${url}transport`, {withCredentials: true});
  }


}
