import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll() {
    return [
      {
        name: 'Jack',
        breed: 'Siamês',
      },
      {
        name: 'Plutão',
        breed: 'Siamês',
      },
    ];
  }
}
