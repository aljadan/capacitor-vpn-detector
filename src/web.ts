import { WebPlugin } from '@capacitor/core';

import type { VpnDetectorPlugin } from './definitions';

export class VpnDetectorWeb extends WebPlugin implements VpnDetectorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
