import '@midwayjs/redis';
import { PowerPartial, ServiceFactoryConfigOption } from '@midwayjs/core';
export * from './dist/index';

declare module 'midway-uuid-int/dist/interface' {
  interface MidwayConfig {
    uuidInt?: ServiceFactoryConfigOption<
      PowerPartial<{
        key?: string;
      }>
    >;
  }
}
