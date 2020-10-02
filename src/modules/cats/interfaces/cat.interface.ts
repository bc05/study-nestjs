import { BreedType } from '../breedType.entity';

export interface ICat {
  id: number;
  name: string;
  breedType: BreedType;
}
