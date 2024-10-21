import '@midwayjs/redis';
export * from './dist/index';

declare module 'midway-uuid-int/dist/interface' {
  interface MidwayConfig {
    uuidInt?: {
      key?: string;
    };
  }
}
