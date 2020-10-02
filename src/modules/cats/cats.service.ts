import { Injectable } from '@nestjs/common';

import { ICat } from './interfaces/cat.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<ICat[]> {
    return await this.catRepository.find();
  }
}
