import type { Data } from '@objectstack/spec';

/**
 * Order Object
 * E-commerce order management
 */
export const orderObject = {
  name: 'order',
  label: 'Order',
  pluralLabel: 'Orders',
  description: 'Customer order management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    order_number: {
      name: 'order_number',
      label: 'Order Number',
      type: 'text',
      required: true,
      unique: true
    },
    
    customer_name: {
      name: 'customer_name',
      label: 'Customer Name',
      type: 'text',
      required: true
    },
    
    customer_email: {
      name: 'customer_email',
      label: 'Customer Email',
      type: 'email',
      required: true
    },
    
    status: {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Shipped', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' }
      ]
    },
    
    total_amount: {
      name: 'total_amount',
      label: 'Total Amount',
      type: 'decimal',
      required: true
    },
    
    shipping_address: {
      name: 'shipping_address',
      label: 'Shipping Address',
      type: 'textarea'
    },
    
    order_date: {
      name: 'order_date',
      label: 'Order Date',
      type: 'datetime',
      required: true
    },
    
    shipped_date: {
      name: 'shipped_date',
      label: 'Shipped Date',
      type: 'datetime'
    },
    
    payment_method: {
      name: 'payment_method',
      label: 'Payment Method',
      type: 'select',
      options: [
        { label: 'Credit Card', value: 'credit_card' },
        { label: 'PayPal', value: 'paypal' },
        { label: 'Bank Transfer', value: 'bank_transfer' },
        { label: 'Cash on Delivery', value: 'cod' }
      ]
    },
    
    notes: {
      name: 'notes',
      label: 'Notes',
      type: 'textarea'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default orderObject;
