import {Deserializable} from './deserializable.model';

export class Nature implements Deserializable{
  constructor(
    public id?: number,
    public libelle?: string,
    public isFacturee?: boolean,
    public hasPrime?: boolean,
    public pourcentagePrime?: number,
    public depassPlafond?: boolean,
    public debutValidite?: Date,
    public finValidite?: Date,
    public tjm?: number) {
  }
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
