import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mission} from  '../mission/Mission'
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  rechercherParId(id : number): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(baseUrl +'/missions'+ id)}
  
changerMission(modif: Mission) 
  {  return this.httpClient.patch<void>(baseUrl +'/missions', modif);
  
}
}
