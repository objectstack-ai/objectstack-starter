import type { Data } from '@objectstack/spec';

/**
 * Product Object
 * E-commerce product catalog management
 */
export const productObject = {
  name: 'product',
  label: 'Product',
  pluralLabel: 'Products',
  description: 'E-commerce product catalog',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    name: {
      name: 'name',
      label: 'Product Name',
      type: 'text',
      required: true
    },
    
    sku: {
      name: 'sku',
      label: 'SKU',
      type: 'text',
      required: true,
      unique: true
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    price: {
      name: 'price',
      label: 'Price',
      type: 'decimal',
      required: true
    },
    
    category: {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Clothing', value: 'clothing' },
        { label: 'Books', value: 'books' },
        { label: 'Home & Garden', value: 'home_garden' },
        { label: 'Sports', value: 'sports' }
      ]
    },
    
    stock_quantity: {
      name: 'stock_quantity',
      label: 'Stock Quantity',
      type: 'number',
      defaultValue: 0
    },
    
    image_url: {
      name: 'image_url',
      label: 'Image URL',
      type: 'url'
    },
    
    is_active: {
      name: 'is_active',
      label: 'Active',
      type: 'boolean',
      defaultValue: true
    },
    
    tags: {
      name: 'tags',
      label: 'Tags',
      type: 'text'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default productObject;
