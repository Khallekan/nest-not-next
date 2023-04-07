import { INestApplication, ValidationPipe } from '@nestjs/common';
import { describe } from 'node:test';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('App e2e', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
    await app.listen(7100);
  });

  afterAll(async () => {
    await app.close();
  });

  it.todo('should pass');
});
