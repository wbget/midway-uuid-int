import '@midwayjs/redis';
import { PowerPartial } from '@midwayjs/core';
export * from './dist/index';

declare module 'midway-uuid-int/dist/interface' {
  interface MidwayConfig {
    uuidInt?: PowerPartial<{
      key?: string;
    }>;
  }
}
