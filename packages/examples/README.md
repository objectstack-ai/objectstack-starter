# @objectstack-starter/examples

Example applications demonstrating various ObjectStack use cases.

## What's Included

This package contains complete example applications for different domains:

### E-commerce Example

**Objects:**
- `product` - Product catalog management
- `order` - Order processing and tracking

**Views:**
- Product list view
- Order list view

**Run:**
```bash
npm run example:ecommerce
```

### Blog Example

**Objects:**
- `blog_post` - Blog post content management
- `author` - Content author management

**Views:**
- Blog post list view
- Author list view

**Run:**
```bash
npm run example:blog
```

### CRM Example

**Objects:**
- `account` - Business account management
- `opportunity` - Sales opportunity tracking

**Views:**
- Account list view
- Opportunity list view
- Opportunity kanban view (sales pipeline)

**Run:**
```bash
npm run example:crm
```

### Basic Example

Demonstrates the core objects from `@objectstack-starter/core`.

**Run:**
```bash
npm run example:basic
```

## Installation

```bash
npm install @objectstack-starter/examples
```

## Usage

```typescript
// Import E-commerce objects
import { productObject, orderObject, productListView } from '@objectstack-starter/examples';

// Import Blog objects
import { blogPostObject, authorObject } from '@objectstack-starter/examples';

// Import CRM objects
import { accountObject, opportunityObject, opportunityKanbanView } from '@objectstack-starter/examples';
```

## Available Exports

### E-commerce
- `productObject` - Product data object
- `orderObject` - Order data object
- `productListView` - Product grid view
- `orderListView` - Order grid view

### Blog
- `blogPostObject` - Blog post data object
- `authorObject` - Author data object
- `blogPostListView` - Blog post grid view
- `authorListView` - Author grid view

### CRM
- `accountObject` - Account data object
- `opportunityObject` - Opportunity data object
- `accountListView` - Account grid view
- `opportunityListView` - Opportunity grid view
- `opportunityKanbanView` - Opportunity kanban view

## Development

```bash
# Build the package
npm run build

# Watch mode
npm run dev

# Type checking
npm run type-check

# Run all examples
npm run example:basic
npm run example:ecommerce
npm run example:blog
npm run example:crm
```

## Use Cases

### E-commerce
Build an online store with product catalog and order management.

### Blog
Create a content management system with multi-author support.

### CRM
Develop a sales management system with account and opportunity tracking.

## License

MIT
