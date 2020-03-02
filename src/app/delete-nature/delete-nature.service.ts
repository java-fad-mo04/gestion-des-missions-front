import { Injectable } from '@angular/core';
import { Nature } from '../models/nature';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DeleteNatureService {

  constructor(private _http: HttpClient) { }

  deleteNature(nature: Nature) {

    return this._http.delete<string>(`${url}nature/${nature.id}`, { responseType: 'text' as 'json' });

  }

}
