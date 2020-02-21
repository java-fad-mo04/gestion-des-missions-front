import { Nature } from '../nature/Nature'
import { Transport } from '../transport/Transport'

export class Mission {
    public id?: number;
    public dateDebut?: Date;
    public dateFin?: Date;
    public nature?: Nature;
    public villeDepart?: string;
    public villeArrivee?: string;
    public transport?: Transport;
    
    constructor(
    ) { }
}