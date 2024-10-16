import { Configuration } from '@midwayjs/core';
import { join } from 'path';
import * as redis from '@midwayjs/redis';

@Configuration({
  imports: [require('../../../src'), redis],
  importConfigs: [join(__dirname, './config.default')],
})
export class AutoConfiguration {}
