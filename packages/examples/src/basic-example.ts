/**
 * Basic Example
 * Demonstrates the core objects from @objectstack-starter/core
 */

import {
  config,
  projectTaskObject,
  contactObject,
  taskListView,
  taskKanbanView,
  contactListView,
  mainApp
} from '@objectstack-starter/core';

console.log('====================================');
console.log('Basic Example - Core Objects');
console.log('====================================\n');

// Example 1: Access configuration
console.log('📋 App Configuration:');
console.log(`  Name: ${config.name}`);
console.log(`  Version: ${config.version}`);
console.log(`  Type: ${config.type}\n`);

// Example 2: Project Task Object
console.log('📝 Project Task Object:');
console.log(`  Name: ${projectTaskObject.name}`);
console.log(`  Label: ${projectTaskObject.label}`);
console.log(`  Fields: ${Object.keys(projectTaskObject.fields).join(', ')}`);
console.log(`  Searchable: ${projectTaskObject.enable?.searchable}`);
console.log(`  API Enabled: ${projectTaskObject.enable?.apiEnabled}\n`);

// Example 3: Contact Object
console.log('👤 Contact Object:');
console.log(`  Name: ${contactObject.name}`);
console.log(`  Label: ${contactObject.label}`);
console.log(`  Fields: ${Object.keys(contactObject.fields).join(', ')}\n`);

// Example 4: Task Views
console.log('🎨 Task Views:');
console.log(`  List View: ${taskListView.name} (${taskListView.type})`);
console.log(`  Kanban View: ${taskKanbanView.name} (${taskKanbanView.type})\n`);

// Example 5: Contact View
console.log('🎨 Contact View:');
console.log(`  List View: ${contactListView.name} (${contactListView.type})`);
console.log(`  Columns: ${contactListView.columns?.length}\n`);

// Example 6: Main App
console.log('🏠 Main Application:');
console.log(`  Name: ${mainApp.name}`);
console.log(`  Label: ${mainApp.label}`);
console.log(`  Navigation Items: ${mainApp.navigation?.length}\n`);

console.log('✅ Basic example completed successfully!');
