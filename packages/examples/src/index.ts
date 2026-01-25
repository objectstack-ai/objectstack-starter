/**
 * ObjectStack Examples Package
 * 
 * This package contains example applications demonstrating
 * different use cases for ObjectStack:
 * - E-commerce (Product, Order)
 * - Blog (Post, Author)
 * - CRM (Account, Opportunity)
 */

// Export E-commerce objects
export { productObject } from './data/product.object.js';
export { orderObject } from './data/order.object.js';

// Export Blog objects
export { blogPostObject } from './data/blog-post.object.js';
export { authorObject } from './data/author.object.js';

// Export CRM objects
export { accountObject } from './data/account.object.js';
export { opportunityObject } from './data/opportunity.object.js';

// Export E-commerce views
export { productListView, orderListView } from './ui/ecommerce.view.js';

// Export Blog views
export { blogPostListView, authorListView } from './ui/blog.view.js';

// Export CRM views
export { accountListView, opportunityListView, opportunityKanbanView } from './ui/crm.view.js';

// Re-export types from @objectstack/spec for convenience
export type { Data, UI, System, AI, API } from '@objectstack/spec';
