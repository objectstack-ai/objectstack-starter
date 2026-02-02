/**
 * ObjectStack Plugin Entry Point
 * 
 * This is the main entry point for your ObjectStack plugin.
 * Export all your objects, views, and configuration here.
 */

// Export plugin configuration
export { config, default as default } from './objectstack.config.js';

// Export objects
export { exampleObject } from './objects/example.object.js';

// Export views
export { exampleListView, exampleKanbanView } from './views/example.view.js';

// Re-export types from @objectstack/spec for convenience
export type { Data, UI, System, AI, API } from '@objectstack/spec';
