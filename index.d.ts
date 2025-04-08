export * from './dist/index';

declare module '@midwayjs/core/dist/interface' {
  interface MidwayConfig {
    uuidInt?: {
      key?: string;
      prefix?: string;
    };
  }
}
