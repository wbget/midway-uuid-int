import {
  Config,
  MidwayCommonError,
  Provide,
  Scope,
  ScopeEnum,
} from '@midwayjs/core';
import { RedisService } from '@midwayjs/redis';
import * as uuid from 'uuid-int';

const IDMAX = 512;
@Provide()
@Scope(ScopeEnum.Singleton)
export class UUIDIntService {
  redis: RedisService;

  gen: uuid.Generator;

  @Config('uuidInt')
  config: { key: string };

  async init() {
    const { key } = this.config;
    if (!!key) {
      if (!this.redis) {
        throw new MidwayCommonError('need import [redis]');
      }
      const rid = await this.redis.incr(key);
      const id = rid % IDMAX;
      if (rid >= IDMAX) {
        await this.redis.set(key, 0);
      }
      this.gen = uuid(id, 1690805352853);
    } else {
      this.gen = uuid(1, 1690805352853);
    }
  }
  uuid() {
    return this.gen.uuid();
  }
}
