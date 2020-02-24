import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor(private httpClient: HttpClient) { }

  getMissionId(idCollegueConnecte: number): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(environment.baseUrl + 'missions?id=' + idCollegueConnecte, {withCredentials: true});
  }

  getMissions(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(environment.baseUrl + 'missions', {withCredentials: true});
  }

  deleteMission(idMission: number) {
    return this.httpClient.delete(environment.baseUrl + 'missions?id=' + idMission, {withCredentials: true});
  }
}
