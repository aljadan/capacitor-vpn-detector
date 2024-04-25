export interface VpnDetectorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
