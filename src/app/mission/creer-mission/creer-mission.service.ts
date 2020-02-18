import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NatureDto } from '../models/nature-dto';

@Injectable({
  providedIn: 'root'
})
export class CreerMissionService {

  constructor(private httpClient: HttpClient) { }

  getNatures(): Observable<NatureDto[]> {
    return this.httpClient.get<NatureDto[]>(environment.baseUrl + 'natures', {withCredentials: true});
}
}
