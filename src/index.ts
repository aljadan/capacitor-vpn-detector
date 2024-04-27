import { registerPlugin } from '@capacitor/core';

import type { VpnDetectorPlugin } from './definitions';

const VpnDetector = registerPlugin<VpnDetectorPlugin>('VpnDetector', {
  web: () => import('./web').then(m => new m.VpnDetectorWeb()),
});


export * from './definitions';
export { VpnDetector };
