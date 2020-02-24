/**
 * Collègue utilisateur de l'application.
 */
import {Deserializable} from '../models/deserializable.model';

export class Collegue implements Deserializable {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  motDePasse?: string;
  roles?: string[];

  constructor(params: any) {
    Object.assign(this, params);
  }

  estAnonyme(): boolean {
    return this.email === undefined;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}
