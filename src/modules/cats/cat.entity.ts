import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BreedType } from './breedType.entity';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @ManyToOne(
    () => BreedType,
    breedType => breedType.cats,
  )
  @JoinColumn({ name: 'breed_type_id' })
  breedType: BreedType;
}
