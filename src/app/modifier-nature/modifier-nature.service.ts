import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nature } from '../models/nature';
import { environment } from 'src/environments/environment';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ModifierNatureService {

  constructor(private _http: HttpClient) { }


  modifierNature(nature: Nature) {

    return this._http.patch<string>(`${url}nature`, nature, { responseType: 'text' as 'json' });

  }
}
