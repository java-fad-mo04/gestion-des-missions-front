import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nature } from '../models/nature';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NatureService {

  constructor(private httpClient: HttpClient) { }
  getNatures(): Observable<Nature[]> {
    return this.httpClient.get<Nature[]>(`${environment.baseUrl}nature`, {withCredentials: true});
}
  getNatureById(id: number):Observable<Nature[]> {
    return this.httpClient.get<Nature[]>(`${environment.baseUrl}nature?id=${id}`, {withCredentials: true});
  }
}
