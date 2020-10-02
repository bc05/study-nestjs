import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Cat } from './cat.entity';

@Entity()
export class BreedType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(
    () => Cat,
    cat => cat.breedType,
  )
  cats?: Cat[];
}
