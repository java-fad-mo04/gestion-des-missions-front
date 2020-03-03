import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission'
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  recupNature(): any { return this.httpClient.get<any>(baseUrl + 'nature') };
  recupTransport(): any { return this.httpClient.get<any>(baseUrl + 'transport') };

  rechercherParId(id: number): Observable<Mission> {
    return this.httpClient.get<Mission>(baseUrl + 'mission/' + id)
  }

  changerMission(modif: Mission) {
    return this.httpClient.patch<string>(baseUrl + 'mission', modif, {
      responseType: 'text' as 'json'
    });

  }
}
