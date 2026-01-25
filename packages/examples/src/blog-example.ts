/**
 * Blog Example
 * Demonstrates blog content management objects (Blog Post, Author)
 */

import { blogPostObject } from './data/blog-post.object.js';
import { authorObject } from './data/author.object.js';
import { blogPostListView, authorListView } from './ui/blog.view.js';

console.log('====================================');
console.log('Blog Example');
console.log('====================================\n');

// Example 1: Blog Post Object
console.log('📝 Blog Post Object:');
console.log(`  Name: ${blogPostObject.name}`);
console.log(`  Label: ${blogPostObject.label}`);
console.log(`  Description: ${blogPostObject.description}`);
console.log(`  Fields: ${Object.keys(blogPostObject.fields).join(', ')}`);
console.log(`  Searchable: ${blogPostObject.enable?.searchable}\n`);

// Example 2: Post Status Workflow
console.log('🔄 Post Status Workflow:');
const statusField = blogPostObject.fields.status;
if (statusField.type === 'select' && statusField.options) {
  statusField.options.forEach(option => {
    console.log(`  ${option.value === 'draft' ? '➡️' : '  '} ${option.label}`);
  });
}
console.log();

// Example 3: Author Object
console.log('✍️  Author Object:');
console.log(`  Name: ${authorObject.name}`);
console.log(`  Label: ${authorObject.label}`);
console.log(`  Description: ${authorObject.description}`);
console.log(`  Fields: ${Object.keys(authorObject.fields).join(', ')}\n`);

// Example 4: Author Social Fields
console.log('🌐 Author Social Media Integration:');
console.log(`  Twitter: ${authorObject.fields.social_twitter.label}`);
console.log(`  GitHub: ${authorObject.fields.social_github.label}\n`);

// Example 5: Blog Post List View
console.log('🎨 Blog Post List View:');
console.log(`  Name: ${blogPostListView.name}`);
console.log(`  Type: ${blogPostListView.type}`);
if (blogPostListView.columns && typeof blogPostListView.columns[0] === 'object') {
  console.log(`  Columns: ${blogPostListView.columns.map(c => typeof c === 'object' ? c.field : c).join(', ')}`);
}
console.log();

// Example 6: Author List View
console.log('🎨 Author List View:');
console.log(`  Name: ${authorListView.name}`);
console.log(`  Type: ${authorListView.type}`);
if (authorListView.columns && typeof authorListView.columns[0] === 'object') {
  console.log(`  Columns: ${authorListView.columns.map(c => typeof c === 'object' ? c.field : c).join(', ')}`);
}
console.log();

// Example 7: Content Relationships
console.log('🔗 Object Relationships:');
console.log(`  Blog Post -> Author: ${blogPostObject.fields.author.type} (${blogPostObject.fields.author.reference})\n`);

console.log('✅ Blog example completed successfully!');
console.log('\n💡 Use Case: Build a content management system with multi-author support');
