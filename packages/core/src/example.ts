/**
 * Example Usage
 * 
 * This file demonstrates how to use the ObjectStack starter template.
 * It shows how to import and work with the defined objects and views.
 */

import {
  config,
  projectTaskObject,
  contactObject,
  taskListView,
  taskKanbanView,
  contactListView,
  mainApp
} from './index.js';

import type { Data, UI } from '@objectstack/spec';

// Example 1: Access the configuration
console.log('App Configuration:', config);
console.log('App Name:', config.name);
console.log('App Version:', config.version);

// Example 2: Access object definitions
console.log('\nProject Task Object:', projectTaskObject.name);
console.log('Fields:', Object.keys(projectTaskObject.fields));

console.log('\nContact Object:', contactObject.name);
console.log('Fields:', Object.keys(contactObject.fields));

// Example 3: Access view definitions
console.log('\nTask List View:', taskListView.name);
console.log('View Type:', taskListView.type);
console.log('Data Provider:', taskListView.data?.provider);

console.log('\nTask Kanban View:', taskKanbanView.name);
console.log('View Type:', taskKanbanView.type);

// Example 4: Access app definition
console.log('\nMain App:', mainApp.name);
console.log('App Label:', mainApp.label);
console.log('Navigation Items:', mainApp.navigation?.length);

// Example 5: Create a custom object using the same pattern
// Note: In real usage, you would define these in separate files like the examples
console.log('\nYou can create custom objects following the same pattern as the examples.');

// Example 6: Working with the spec types
console.log('\nThe starter template includes TypeScript types from @objectstack/spec');
console.log('Available namespaces: Data, UI, System, AI, API');

console.log('\n✅ ObjectStack Starter Template loaded successfully!');
