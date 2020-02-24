import {Deserializable} from './deserializable.model';

export class Transport implements Deserializable{
    constructor(
      public id?: number,
      public libelle?: string
      ) {}
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }
