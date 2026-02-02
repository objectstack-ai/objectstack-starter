import type { System } from '@objectstack/spec';

/**
 * ObjectStack Plugin Configuration
 * 
 * This configuration file defines the metadata for your ObjectStack plugin.
 * It specifies the plugin's identity, type, and basic information.
 */
export const config: System.ObjectStackManifest = {
  /**
   * Plugin ID (machine name, use lowercase with hyphens)
   * This is used to identify your plugin in the ObjectStack ecosystem
   */
  id: 'my-plugin',
  
  /**
   * Plugin name
   */
  name: 'my-plugin',
  
  /**
   * Plugin version following semantic versioning
   */
  version: '0.1.0',
  
  /**
   * Plugin type - can be 'plugin', 'app', 'package', etc.
   */
  type: 'plugin',
  
  /**
   * Human-readable description of what this plugin does
   */
  description: 'A starter template for creating ObjectStack plugins'
};

export default config;
