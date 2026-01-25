/**
 * ObjectStack Starter Template
 * 
 * This is a starter template for building ObjectStack applications.
 * It demonstrates the basic structure and conventions for defining
 * data objects, UI views, and application configuration.
 */

// Export configuration
export { default as config } from './objectstack.config.js';

// Export data objects
export { projectTaskObject } from './data/project-task.object.js';
export { contactObject } from './data/contact.object.js';

// Export UI views
export { taskListView, taskKanbanView } from './ui/task.view.js';
export { contactListView } from './ui/contact.view.js';

// Export app definition
export { mainApp } from './ui/app.js';

// Re-export types from @objectstack/spec for convenience
export type { Data, UI, System, AI, API } from '@objectstack/spec';
