import { Test, TestingModule } from '@nestjs/testing';

import { ICat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;
  const mockCatsService = {
    findAll: (): ICat[] => [
      {
        id: 1,
        name: 'Jack',
        breed: 'Siamês',
      },
    ],
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        {
          provide: CatsService,
          useValue: mockCatsService,
        },
      ],
    }).compile();

    controller = moduleRef.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cats', () => {
      expect(controller.findAll()).toEqual(mockCatsService.findAll());
    });
  });
});
