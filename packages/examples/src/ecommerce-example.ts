/**
 * E-commerce Example
 * Demonstrates e-commerce objects (Product, Order)
 */

import { productObject } from './data/product.object.js';
import { orderObject } from './data/order.object.js';
import { productListView, orderListView } from './ui/ecommerce.view.js';

console.log('====================================');
console.log('E-commerce Example');
console.log('====================================\n');

// Example 1: Product Object
console.log('🛍️  Product Object:');
console.log(`  Name: ${productObject.name}`);
console.log(`  Label: ${productObject.label}`);
console.log(`  Description: ${productObject.description}`);
console.log(`  Fields: ${Object.keys(productObject.fields).join(', ')}`);
console.log(`  API Enabled: ${productObject.enable?.apiEnabled}\n`);

// Example 2: Product Categories
console.log('📦 Product Categories:');
const categoryField = productObject.fields.category;
if (categoryField.type === 'select' && categoryField.options) {
  categoryField.options.forEach(option => {
    console.log(`  - ${option.label} (${option.value})`);
  });
}
console.log();

// Example 3: Order Object
console.log('📋 Order Object:');
console.log(`  Name: ${orderObject.name}`);
console.log(`  Label: ${orderObject.label}`);
console.log(`  Description: ${orderObject.description}`);
console.log(`  Fields: ${Object.keys(orderObject.fields).join(', ')}\n`);

// Example 4: Order Status Flow
console.log('🔄 Order Status Flow:');
const statusField = orderObject.fields.status;
if (statusField.type === 'select' && statusField.options) {
  statusField.options.forEach(option => {
    console.log(`  ${option.value === 'pending' ? '➡️' : '  '} ${option.label}`);
  });
}
console.log();

// Example 5: Payment Methods
console.log('💳 Payment Methods:');
const paymentField = orderObject.fields.payment_method;
if (paymentField.type === 'select' && paymentField.options) {
  paymentField.options.forEach(option => {
    console.log(`  - ${option.label}`);
  });
}
console.log();

// Example 6: Product List View
console.log('🎨 Product List View:');
console.log(`  Name: ${productListView.name}`);
console.log(`  Type: ${productListView.type}`);
if (productListView.columns && typeof productListView.columns[0] === 'object') {
  console.log(`  Columns: ${productListView.columns.map(c => typeof c === 'object' ? c.field : c).join(', ')}`);
}
console.log();

// Example 7: Order List View
console.log('🎨 Order List View:');
console.log(`  Name: ${orderListView.name}`);
console.log(`  Type: ${orderListView.type}`);
if (orderListView.columns && typeof orderListView.columns[0] === 'object') {
  console.log(`  Columns: ${orderListView.columns.map(c => typeof c === 'object' ? c.field : c).join(', ')}`);
}
console.log();

console.log('✅ E-commerce example completed successfully!');
console.log('\n💡 Use Case: Build an online store with product catalog and order management');
