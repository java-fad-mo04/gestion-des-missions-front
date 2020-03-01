/**
 * Mission.
 */
import { Nature } from './nature';
import { Collegue } from './collegue';
import { Transport } from './transport';

export class Mission {
  constructor(
    public id?: number,
    public dateDebut?: Date,
    public dateFin?: Date,
    public nature?: Nature,
    public villeDepart?: string,
    public villeArrivee?: string,
    public transport?: Transport,
    public status?: string,
    public collegue?: Collegue) {}
}
