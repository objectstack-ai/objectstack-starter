import type { UI } from '@objectstack/spec';

/**
 * Product List View
 * Grid view for managing products
 */
export const productListView: UI.ListView = {
  name: 'product_list',
  label: 'Products',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'product'
  },
  columns: [
    { field: 'name', width: 200 },
    { field: 'sku', width: 120 },
    { field: 'price', width: 100 },
    { field: 'category', width: 150 },
    { field: 'stock_quantity', width: 120 },
    { field: 'is_active', width: 80 }
  ]
};

/**
 * Order List View
 * Grid view for managing orders
 */
export const orderListView: UI.ListView = {
  name: 'order_list',
  label: 'Orders',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'order'
  },
  columns: [
    { field: 'order_number', width: 150 },
    { field: 'customer_name', width: 200 },
    { field: 'status', width: 120 },
    { field: 'total_amount', width: 120 },
    { field: 'order_date', width: 150 },
    { field: 'payment_method', width: 150 }
  ]
};

export default { productListView, orderListView };
