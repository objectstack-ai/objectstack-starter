/**
 * CRM Example
 * Demonstrates CRM objects (Account, Opportunity)
 */

import { accountObject } from './data/account.object.js';
import { opportunityObject } from './data/opportunity.object.js';
import { accountListView, opportunityListView, opportunityKanbanView } from './ui/crm.view.js';

console.log('====================================');
console.log('CRM Example');
console.log('====================================\n');

// Example 1: Account Object
console.log('🏢 Account Object:');
console.log(`  Name: ${accountObject.name}`);
console.log(`  Label: ${accountObject.label}`);
console.log(`  Description: ${accountObject.description}`);
console.log(`  Fields: ${Object.keys(accountObject.fields).join(', ')}`);
console.log(`  Track History: ${accountObject.enable?.trackHistory}\n`);

// Example 2: Account Industries
console.log('🏭 Industries:');
const industryField = accountObject.fields.industry;
if (industryField.type === 'select' && industryField.options) {
  industryField.options.forEach(option => {
    console.log(`  - ${option.label}`);
  });
}
console.log();

// Example 3: Account Types
console.log('📊 Account Types:');
const typeField = accountObject.fields.type;
if (typeField.type === 'select' && typeField.options) {
  typeField.options.forEach(option => {
    console.log(`  - ${option.label} (${option.value})`);
  });
}
console.log();

// Example 4: Opportunity Object
console.log('💰 Opportunity Object:');
console.log(`  Name: ${opportunityObject.name}`);
console.log(`  Label: ${opportunityObject.label}`);
console.log(`  Description: ${opportunityObject.description}`);
console.log(`  Fields: ${Object.keys(opportunityObject.fields).join(', ')}\n`);

// Example 5: Sales Pipeline Stages
console.log('🔄 Sales Pipeline Stages:');
const stageField = opportunityObject.fields.stage;
if (stageField.type === 'select' && stageField.options) {
  stageField.options.forEach((option, index) => {
    const arrow = index < stageField.options!.length - 1 ? '➡️' : '';
    console.log(`  ${option.label} ${arrow}`);
  });
}
console.log();

// Example 6: Lead Sources
console.log('📢 Lead Sources:');
const leadSourceField = opportunityObject.fields.lead_source;
if (leadSourceField.type === 'select' && leadSourceField.options) {
  leadSourceField.options.forEach(option => {
    console.log(`  - ${option.label}`);
  });
}
console.log();

// Example 7: Account List View
console.log('🎨 Account List View:');
console.log(`  Name: ${accountListView.name}`);
console.log(`  Type: ${accountListView.type}`);
if (accountListView.columns && typeof accountListView.columns[0] === 'object') {
  console.log(`  Columns: ${accountListView.columns.map(c => typeof c === 'object' ? c.field : c).join(', ')}`);
}
console.log();

// Example 8: Opportunity List View
console.log('🎨 Opportunity List View:');
console.log(`  Name: ${opportunityListView.name}`);
console.log(`  Type: ${opportunityListView.type}`);
if (opportunityListView.columns && typeof opportunityListView.columns[0] === 'object') {
  console.log(`  Columns: ${opportunityListView.columns.map(c => typeof c === 'object' ? c.field : c).join(', ')}`);
}
console.log();

// Example 9: Opportunity Kanban View
console.log('🎨 Opportunity Kanban View (Sales Pipeline):');
console.log(`  Name: ${opportunityKanbanView.name}`);
console.log(`  Type: ${opportunityKanbanView.type}`);
if (opportunityKanbanView.columns && typeof opportunityKanbanView.columns[0] === 'string') {
  console.log(`  Card Fields: ${opportunityKanbanView.columns.join(', ')}`);
}
console.log();

// Example 10: Object Relationships
console.log('🔗 Object Relationships:');
console.log(`  Opportunity -> Account: ${opportunityObject.fields.account.type} (${opportunityObject.fields.account.reference})`);
console.log(`  Opportunity -> Owner: ${opportunityObject.fields.owner.type} (${opportunityObject.fields.owner.reference})\n`);

console.log('✅ CRM example completed successfully!');
console.log('\n💡 Use Case: Build a sales management system with account and opportunity tracking');
