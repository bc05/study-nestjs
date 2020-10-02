import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

import { ICat } from './interfaces/cat.interface';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { Repository } from 'typeorm';

export const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
  find: (): ICat[] => {
    return [
      {
        id: 1,
        name: 'Plutão',
        breed: 'Siamês',
      },
    ];
  },
}));

describe('CatsService', () => {
  let service: CatsService;
  let repository: Repository<Cat>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: getRepositoryToken(Cat),
          useClass: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);
    repository = module.get(getRepositoryToken(Cat));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of cats', async () => {
    expect(await service.findAll()).toEqual(repository.find());
  });
});
