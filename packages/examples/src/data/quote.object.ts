import type { Data } from '@objectstack/spec';

/**
 * Quote Object
 * CRM sales quote/proposal management
 */
export const quoteObject = {
  name: 'quote',
  label: 'Quote',
  pluralLabel: 'Quotes',
  description: 'Sales quote and proposal management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    quote_number: {
      name: 'quote_number',
      label: 'Quote Number',
      type: 'text',
      unique: true,
      required: true
    },
    
    name: {
      name: 'name',
      label: 'Quote Name',
      type: 'text',
      required: true
    },
    
    opportunity: {
      name: 'opportunity',
      label: 'Opportunity',
      type: 'lookup',
      reference: 'opportunity'
    },
    
    account: {
      name: 'account',
      label: 'Account',
      type: 'lookup',
      reference: 'account',
      required: true
    },
    
    contact: {
      name: 'contact',
      label: 'Contact',
      type: 'lookup',
      reference: 'contact'
    },
    
    status: {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Sent', value: 'sent' },
        { label: 'Accepted', value: 'accepted' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Expired', value: 'expired' }
      ]
    },
    
    subtotal: {
      name: 'subtotal',
      label: 'Subtotal',
      type: 'decimal'
    },
    
    tax: {
      name: 'tax',
      label: 'Tax',
      type: 'decimal'
    },
    
    discount: {
      name: 'discount',
      label: 'Discount',
      type: 'decimal'
    },
    
    total_amount: {
      name: 'total_amount',
      label: 'Total Amount',
      type: 'decimal',
      required: true
    },
    
    valid_until: {
      name: 'valid_until',
      label: 'Valid Until',
      type: 'date',
      required: true
    },
    
    quote_date: {
      name: 'quote_date',
      label: 'Quote Date',
      type: 'date',
      required: true,
      defaultValue: 'today'
    },
    
    payment_terms: {
      name: 'payment_terms',
      label: 'Payment Terms',
      type: 'select',
      options: [
        { label: 'Net 15', value: 'net_15' },
        { label: 'Net 30', value: 'net_30' },
        { label: 'Net 60', value: 'net_60' },
        { label: 'Net 90', value: 'net_90' },
        { label: 'Due on Receipt', value: 'due_on_receipt' }
      ]
    },
    
    shipping_method: {
      name: 'shipping_method',
      label: 'Shipping Method',
      type: 'select',
      options: [
        { label: 'Standard', value: 'standard' },
        { label: 'Express', value: 'express' },
        { label: 'Overnight', value: 'overnight' },
        { label: 'Pickup', value: 'pickup' }
      ]
    },
    
    billing_address: {
      name: 'billing_address',
      label: 'Billing Address',
      type: 'textarea'
    },
    
    shipping_address: {
      name: 'shipping_address',
      label: 'Shipping Address',
      type: 'textarea'
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    terms_and_conditions: {
      name: 'terms_and_conditions',
      label: 'Terms and Conditions',
      type: 'textarea'
    },
    
    owner: {
      name: 'owner',
      label: 'Owner',
      type: 'lookup',
      reference: 'user'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default quoteObject;
