import { Nature } from './nature';
import { Collegue } from '../auth/auth.domains';
import { Transport } from './transport';
import {Deserializable} from './deserializable.model';

export class Mission implements Deserializable{
  constructor(
    public id?: number,
    public dateDebut?: Date,
    public dateFin?: Date,
    public nature?: Nature,
    public villeDepart?: string,
    public villeArrivee?: string,
    public transport?: Transport,
    public statut?: string,
    public collegue?: Collegue) {}

    deserialize(input: any) {
      Object.assign(this, input);
      this.nature = input.nature.map(nature => new Nature().deserialize(nature));
      this.transport = input.transport.map(transport => new Transport().deserialize(transport));
      this.collegue = input.collegue.map(collegue => new Collegue(collegue.id).deserialize(collegue));
      return this;
    }

    getNature(){
      return this.nature.libelle;
    }

    getTransport(){
      return this.transport.libelle;
    }


}
