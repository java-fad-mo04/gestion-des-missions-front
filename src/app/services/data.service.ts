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

  getMissions(): Observable<Mission[]> {
    return this._httpClient.get<Mission[]>(`${url}mission`, {withCredentials: true});
  }

  getMission(id: number): Observable<Mission[]> {
    return this._httpClient.get<Mission[]>(`${url}mission?id=`, {withCredentials: true});
  }

  addMission(mission: Mission): Observable<Mission>{
    return this._httpClient.post<Mission>(`${url}mission`, mission,{withCredentials: true});
  }

  getNatures(): Observable<Nature[]> {
    return this._httpClient.get<Nature[]>(`${url}nature`, {withCredentials: true});
  }

  modifierNature(nature: Nature) {
    return this._httpClient.patch<string>(`${url}nature`, nature, { responseType: 'text' as 'json' });
  }

  getTransport(): Observable<Transport[]> {
    return this._httpClient.get<Transport[]>(`${url}transport`, {withCredentials: true});
  }

  modifierMission(mission: Mission) {
    return this._httpClient.patch<string>(`${url}mission`, mission, {responseType: 'text' as 'json' });
  }
}
