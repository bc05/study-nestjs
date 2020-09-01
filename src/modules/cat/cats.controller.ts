import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatsController {
  @Get()
  findAll() {
    return [
      {
        name: 'Jack',
        breed: 'Siamês',
      },
    ];
  }
}
