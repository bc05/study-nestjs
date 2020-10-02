import { ValueProvider } from '@nestjs/common';
import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';

import { AppModule } from '../../src/app.module';

export default async function setUp(providers?: ValueProvider[]) {
  const testingModuleBuilder: TestingModuleBuilder = Test.createTestingModule({
    imports: [AppModule],
  });

  providers?.forEach(provider => {
    testingModuleBuilder
      .overrideProvider(provider.provide)
      .useValue(provider.useValue);
  });

  const moduleFixture: TestingModule = await testingModuleBuilder.compile();

  const app = moduleFixture.createNestApplication();

  await app.init();

  return { moduleFixture, app };
}
