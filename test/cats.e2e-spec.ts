import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';

import { CatsModule } from '../src/modules/cats/cats.module';
import { CatsService } from '../src/modules/cats/cats.service';

describe('Cats', () => {
  let app: INestApplication;
  const catsService = {
    findAll: () => [
      {
        name: 'Jack',
        breed: 'Siamês',
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it(`/GET cats`, async () => {
    const response = await request(app.getHttpServer()).get('/cats');

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body).toEqual(catsService.findAll());
  });
});
