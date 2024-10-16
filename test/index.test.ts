import { close, createLightApp } from '@midwayjs/mock';
import { join } from 'path';
import * as custom from '../src';
import { RedisService } from '@midwayjs/redis';

describe('/test/index.test.ts', () => {
  it('test uuidInt local', async () => {
    const app = await createLightApp(join(__dirname, './local'));
    const uuid = await app
      .getApplicationContext()
      .getAsync(custom.UUIDIntService);
    expect((await app.getApplicationContext().hasNamespace('redis')) === false);
    expect(uuid.uuid() !== uuid.uuid());
    await close(app);
  });
  it('test uuidInt redis', async () => {
    const app = await createLightApp(join(__dirname, './redis'));
    const uuid = await app
      .getApplicationContext()
      .getAsync(custom.UUIDIntService);
    expect(await app.getApplicationContext().getAsync(RedisService));
    expect(uuid.uuid() !== uuid.uuid());
    await close(app);
  });
});
