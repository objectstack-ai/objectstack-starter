import type { Data } from '@objectstack/spec';

/**
 * Contact Object
 * Defines the schema for contact management
 */
export const contactObject = {
  name: 'contact',
  label: 'Contact',
  pluralLabel: 'Contacts',
  description: 'Contact management for customers and partners',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    first_name: {
      name: 'first_name',
      label: 'First Name',
      type: 'text',
      required: true
    },
    
    last_name: {
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
      required: true
    },
    
    email: {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true
    },
    
    phone: {
      name: 'phone',
      label: 'Phone',
      type: 'phone'
    },
    
    mobile: {
      name: 'mobile',
      label: 'Mobile',
      type: 'phone'
    },
    
    account: {
      name: 'account',
      label: 'Account',
      type: 'lookup',
      reference: 'account',
      description: 'Associated business account'
    },
    
    company: {
      name: 'company',
      label: 'Company',
      type: 'text'
    },
    
    title: {
      name: 'title',
      label: 'Job Title',
      type: 'text'
    },
    
    contact_type: {
      name: 'contact_type',
      label: 'Contact Type',
      type: 'select',
      defaultValue: 'customer',
      options: [
        { label: 'Customer', value: 'customer' },
        { label: 'Partner', value: 'partner' },
        { label: 'Vendor', value: 'vendor' },
        { label: 'Other', value: 'other' }
      ]
    },
    
    notes: {
      name: 'notes',
      label: 'Notes',
      type: 'textarea'
    },
    
    is_active: {
      name: 'is_active',
      label: 'Active',
      type: 'boolean',
      defaultValue: true
    }
  },
  
  // Enable capabilities
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default contactObject;
