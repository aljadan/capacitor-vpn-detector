export interface VpnDetectorPlugin {
  isVpnActive(): Promise<{ value: boolean }>;
}
