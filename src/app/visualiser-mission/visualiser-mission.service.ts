import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from '../models/Mission';


@Injectable({
  providedIn: 'root'
})
export class VisualiserMissionService {

  constructor(private httpClient: HttpClient) { }


    getMissions(): Observable<Mission[]> {
      return this.httpClient.get<Mission[]>(`${environment.baseUrl}mission`, {withCredentials: true});
    }

    getMissionById(missionId: number): Observable<Mission[]> {
      return this.httpClient.get<Mission[]>(`${environment.baseUrl}mission?id=${missionId}`, {withCredentials: true});
    }

    deleteMission(missionId: number) {
      return this.httpClient.delete(`${environment.baseUrl}mission?id=${missionId}`, {withCredentials: true});
    }

}
