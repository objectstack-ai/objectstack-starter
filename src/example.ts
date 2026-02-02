/**
 * Example Usage
 * 
 * This file demonstrates how to use your ObjectStack plugin.
 */

import {
  config,
  exampleObject,
  exampleListView,
  exampleKanbanView
} from './index.js';

// Display plugin configuration
console.log('='.repeat(60));
console.log('ObjectStack Plugin Starter Template');
console.log('='.repeat(60));
console.log();

console.log('📦 Plugin Configuration:');
console.log('  ID:', config.id);
console.log('  Name:', config.name);
console.log('  Version:', config.version);
console.log('  Type:', config.type);
console.log('  Description:', config.description);
console.log();

// Display object definition
console.log('📊 Example Object:', exampleObject.name);
console.log('  Label:', exampleObject.label);
console.log('  Fields:', Object.keys(exampleObject.fields).join(', '));
console.log();

// Display views
console.log('👁️  Views:');
console.log('  List View:', exampleListView.name);
console.log('    Type:', exampleListView.type);
console.log('    Columns:', exampleListView.columns?.length);
console.log();
console.log('  Kanban View:', exampleKanbanView.name);
console.log('    Type:', exampleKanbanView.type);
console.log('    Group By Field:', exampleKanbanView.kanban?.groupByField);
console.log();

console.log('✅ Plugin loaded successfully!');
console.log();
console.log('Next Steps:');
console.log('  1. Customize objectstack.config.ts with your plugin details');
console.log('  2. Modify or add objects in src/objects/');
console.log('  3. Modify or add views in src/views/');
console.log('  4. Export everything in src/index.ts');
console.log('  5. Build with: npm run build');
console.log();
