/**
 * Ligne de frais.
 */

 import { Mission } from '../models/mission';

export class NoteDeFrais {
    constructor(
        public id: Number,
        public lignesDeFrais: LigneDeFrais[],
        public mission: Mission
    ) { }
}
export class LigneDeFrais {
    constructor(
        public id: Number,
        public date: Date,
        public natureLigne: NatureLigne,
        public frais: Number
    ) { }
}
export enum NatureLigne {
    RESTAURANT, HOTEL, PETITDEJEUNER, TRANSPORT

}
