import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from '../models/mission';
import { Event } from '../models/events';
import { Nature } from '../models/nature';
import { Transport } from '../models/transport';
import {tap, catchError} from 'rxjs/operators';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  missionSubject = new Subject<Mission[]>();
  missionList: Mission[];
  natureSubject = new Subject<Nature[]>();
  eventSubject = new Subject<Event[]>();
  eventList: Event[];

  constructor(private _httpClient: HttpClient) { }

// Mission
  getMissions() {
    return this._httpClient.get<Mission[]>(`${url}mission`, {withCredentials: true})
    .subscribe((miss: Mission[]) => {
      this.missionList = miss;
        this.missionSubject.next(this.missionList);
      });
  }

  getMission(id: number): Observable<Mission> {
    return this._httpClient.get<Mission>(`${url}mission/${id}`, {withCredentials: true});
  }

  addMission(mission: Mission){
    return this._httpClient.post<string>(`${url}mission`, mission, {responseType: 'text' as 'json' });
  }

  modifierMission(mission: Mission) {
    return this._httpClient.patch<string>(`${url}mission`, mission, {responseType: 'text' as 'json' });
  }

  deleteMission(id: number) {
    console.log(id);
    return this._httpClient.delete<string>(`${url}mission/${id}`, { responseType: 'text' as 'json' });
  }

  getMissionPrime(id: number, date: string) {
    return this._httpClient.get<Mission[]>(`${url}mission/${id}/${date}`, { withCredentials: true });
  }

  // Nature

  emitListeNat() {
    let listeNat: Nature[];
    this.getNatures().subscribe((arg: Nature[]) => {
      listeNat = arg;
      this.natureSubject.next(listeNat);
    });
  }
  getNatures(): Observable<Nature[]> {
    return this._httpClient.get<Nature[]>(`${url}nature`, {withCredentials: true});
  }

  createNature(nature: Nature) {
    return this._httpClient.post<string>(`${url}nature`, nature, { responseType: 'text' as 'json' });
  }

  modifierNature(nature: Nature) {
    return this._httpClient.patch<string>(`${url}nature`, nature, { responseType: 'text' as 'json' });
  }
  deleteNature(nature: Nature) {

    return this._httpClient.delete<string>(`${url}nature/${nature.id}`, { responseType: 'text' as 'json' });

  }
  // Transport

  getTransport(): Observable<Transport[]> {
    return this._httpClient.get<Transport[]>(`${url}transport`, {withCredentials: true});
  }

//Events
getEvents() {
  return this._httpClient.get<Event[]>(`${url}mission/events`, {withCredentials: true})
  .subscribe((eve: Event[]) => {
    this.eventList = eve;
      this.eventSubject.next(this.eventList);
    });
}

}
