import { Configuration, IMidwayContainer, Inject } from '@midwayjs/core';
import { RedisService } from '@midwayjs/redis';
import { join } from 'path';
import { UUIDIntService } from './service/uuidInt.service';

@Configuration({
  namespace: 'uuidInt',
  importConfigs: [join(__dirname, './config/')],
})
export class UUIDIntConfiguration {
  @Inject()
  service: UUIDIntService;
  async onReady(container: IMidwayContainer) {
    if (container.hasNamespace('redis')) {
      this.service.redis = await container.getAsync(RedisService);
    }
    await this.service.init();
  }
}
