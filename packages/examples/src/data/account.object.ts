import type { Data } from '@objectstack/spec';

/**
 * Account Object
 * CRM account/company management
 */
export const accountObject = {
  name: 'account',
  label: 'Account',
  pluralLabel: 'Accounts',
  description: 'Business account management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    name: {
      name: 'name',
      label: 'Account Name',
      type: 'text',
      required: true
    },
    
    account_number: {
      name: 'account_number',
      label: 'Account Number',
      type: 'text',
      unique: true
    },
    
    industry: {
      name: 'industry',
      label: 'Industry',
      type: 'select',
      options: [
        { label: 'Technology', value: 'technology' },
        { label: 'Finance', value: 'finance' },
        { label: 'Healthcare', value: 'healthcare' },
        { label: 'Manufacturing', value: 'manufacturing' },
        { label: 'Retail', value: 'retail' },
        { label: 'Education', value: 'education' },
        { label: 'Other', value: 'other' }
      ]
    },
    
    type: {
      name: 'type',
      label: 'Account Type',
      type: 'select',
      options: [
        { label: 'Customer', value: 'customer' },
        { label: 'Prospect', value: 'prospect' },
        { label: 'Partner', value: 'partner' },
        { label: 'Competitor', value: 'competitor' }
      ]
    },
    
    annual_revenue: {
      name: 'annual_revenue',
      label: 'Annual Revenue',
      type: 'decimal'
    },
    
    employee_count: {
      name: 'employee_count',
      label: 'Number of Employees',
      type: 'number'
    },
    
    website: {
      name: 'website',
      label: 'Website',
      type: 'url'
    },
    
    phone: {
      name: 'phone',
      label: 'Phone',
      type: 'text'
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
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default accountObject;
