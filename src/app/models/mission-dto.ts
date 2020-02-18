import { NatureDto } from './nature-dto';
import { CollegueDto } from './collegue-dto';

export class MissionDto {
  // tslint:disable-next-line: max-line-length
  constructor(public id: number, public startDate: string, public endDate: string, public nature: NatureDto, public villeDepart: string, public villeArrivee: string, public transport: string, public statut: string, public collegue: CollegueDto) {}
}
