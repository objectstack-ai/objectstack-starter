import type { Kernel } from '@objectstack/spec';

/**
 * ObjectStack Configuration
 * This file defines the metadata and capabilities of this ObjectStack package.
 */
export const config = {
  name: 'objectstack-starter',
  version: '0.1.0',
  type: 'app',
  description: 'A starter template for building ObjectStack applications'
} as Kernel.ObjectStackManifest;

export default config;
