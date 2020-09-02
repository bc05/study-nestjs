import { Test, TestingModule } from '@nestjs/testing';

import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    controller = moduleRef.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cats', () => {
      const expected: ICat[] = [
        {
          name: 'Jack',
          breed: 'Siamês',
        },
      ];

      jest.spyOn(catsService, 'findAll').mockImplementation(() => expected);

      expect(controller.findAll()).toEqual(expected);
    });
  });
});
