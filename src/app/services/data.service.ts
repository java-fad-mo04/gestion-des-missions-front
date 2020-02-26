import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mission} from  '../models/mission'
import { environment } from '../../environments/environment';

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

}
