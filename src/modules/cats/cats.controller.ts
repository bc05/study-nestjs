import { Controller, Get } from '@nestjs/common';

import { ICat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<ICat[]> {
    return this.catsService.findAll();
  }
}
