import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission'
import { environment } from '../../environments/environment';

const url = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  recupNature(): any { return this.httpClient.get<any>(url + 'nature') };
  recupTransport(): any { return this.httpClient.get<any>(url + 'transport') };

  rechercherParId(id: number): Observable<Mission> {
    return this.httpClient.get<Mission>(url + 'mission/' + id)
  }

  changerMission(modif: Mission) {
    return this.httpClient.patch<string>(url + 'mission', modif, {
      responseType: 'text' as 'json'
    });
  }

  getMissions(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`${url}mission`, { withCredentials: true });
  }

}
