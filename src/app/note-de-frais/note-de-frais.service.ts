import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { NoteDeFrais } from '../models/ligne-frais';
import { Observable, Subject } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

// Environnement URL
const url = environment.baseUrl;
const URL_BACKEND = environment.baseUrl + `lignedefrais`;
const saveFile = (blobContent: Blob, fileName: string) => {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
};

@Injectable({
  providedIn: 'root'
})

export class NoteDeFraisService {

  constructor(private _http: HttpClient) { }

  // Lister les notes de frais
  listerNoteDeFrais(): Observable<NoteDeFrais[]> {

    return this._http.get(URL_BACKEND).pipe(
      map((data: NoteDeFrais[]) =>
        data.map(noteDeFrais =>
          new NoteDeFrais(noteDeFrais.id, noteDeFrais.lignesDeFrais, noteDeFrais.mission)),
      ));
  }

  // Ajouter une ligne de frais
  addNoteDeFrais(noteDeFrais: NoteDeFrais) {
    console.log("addnote de frais :" + noteDeFrais.mission.id)
    return this._http.post(URL_BACKEND + `/new`, noteDeFrais);
  }

  // Supprimer une ligne de frais
  deleteNoteDeFrais(noteDeFrais: NoteDeFrais) {
    return this._http.post(URL_BACKEND + `/delete`, noteDeFrais);
  }

  // Mettre à jour une nature de mission
  updateNoteDeFrais(noteDeFraisAModifier: NoteDeFrais) {
    return this._http.post(URL_BACKEND + `/update`, noteDeFraisAModifier);
  }
  notesDeFraisToPDF(): void {
    this._http.get(environment.baseUrl + 'notesdefrais/pdf', { "responseType": "blob" }).subscribe(
      data => {
        saveFile(data, "notesdefrais.pdf");
      }, // success path
      error => console.log(error) // error path
    );
  }
  findById(id: any): Observable<NoteDeFrais> {
    return this._http.get(URL_BACKEND + `/${id}`).pipe(
      map(
        (note: any) => new NoteDeFrais(note.id, note.ligneDeFrais, note.mission))

    )
  }

}
