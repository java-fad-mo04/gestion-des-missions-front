import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nature } from '../models/nature';
import { environment } from 'src/environments/environment';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CreationNatureService {

  constructor(private _http: HttpClient) { }



  createNature(nature: Nature) {

    return this._http.post<string>(`${url}nature`, nature, { responseType: 'text' as 'json' });

  }

}
