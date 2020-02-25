import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Nature } from '../models/nature';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})



export class VisualisationNatureService {

  constructor(private _http: HttpClient) {

  }

  recuperationNature() {

    return this._http.get<Nature[]>(`${url}nature`);


  }




}
