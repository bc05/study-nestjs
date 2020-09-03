import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';

import setUp from './common/setUp';
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
    const { app: setUpApp } = await setUp([
      { provide: CatsService, useValue: catsService },
    ]);
    app = setUpApp;
  });

  afterAll(async () => {
    await app.close();
  });

  describe('List Cats: /cats (GET)', () => {
    it('should return list of cats', async done => {
      request(app.getHttpServer())
        .get('/cats')
        .expect(HttpStatus.OK, catsService.findAll(), done);
    });
  });
});
