import type { Data } from '@objectstack/spec';

/**
 * Lead Object
 * CRM lead management and qualification
 * Represents potential customers before they become opportunities
 */
export const leadObject = {
  name: 'lead',
  label: 'Lead',
  pluralLabel: 'Leads',
  description: 'Lead management and qualification for potential customers',
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
    
    company: {
      name: 'company',
      label: 'Company',
      type: 'text',
      required: true
    },
    
    title: {
      name: 'title',
      label: 'Job Title',
      type: 'text'
    },
    
    email: {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true
    },
    
    phone: {
      name: 'phone',
      label: 'Phone',
      type: 'text'
    },
    
    mobile: {
      name: 'mobile',
      label: 'Mobile',
      type: 'text'
    },
    
    website: {
      name: 'website',
      label: 'Website',
      type: 'url'
    },
    
    lead_source: {
      name: 'lead_source',
      label: 'Lead Source',
      type: 'select',
      required: true,
      options: [
        { label: 'Web', value: 'web' },
        { label: 'Referral', value: 'referral' },
        { label: 'Cold Call', value: 'cold_call' },
        { label: 'Partner', value: 'partner' },
        { label: 'Event', value: 'event' },
        { label: 'Social Media', value: 'social_media' },
        { label: 'Email Campaign', value: 'email_campaign' },
        { label: 'Advertisement', value: 'advertisement' }
      ]
    },
    
    lead_status: {
      name: 'lead_status',
      label: 'Lead Status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Unqualified', value: 'unqualified' },
        { label: 'Converted', value: 'converted' }
      ]
    },
    
    rating: {
      name: 'rating',
      label: 'Rating',
      type: 'select',
      options: [
        { label: 'Hot', value: 'hot' },
        { label: 'Warm', value: 'warm' },
        { label: 'Cold', value: 'cold' }
      ]
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
    
    street: {
      name: 'street',
      label: 'Street',
      type: 'text'
    },
    
    city: {
      name: 'city',
      label: 'City',
      type: 'text'
    },
    
    state: {
      name: 'state',
      label: 'State/Province',
      type: 'text'
    },
    
    postal_code: {
      name: 'postal_code',
      label: 'Postal Code',
      type: 'text'
    },
    
    country: {
      name: 'country',
      label: 'Country',
      type: 'text'
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    converted_account: {
      name: 'converted_account',
      label: 'Converted Account',
      type: 'lookup',
      reference: 'account'
    },
    
    converted_contact: {
      name: 'converted_contact',
      label: 'Converted Contact',
      type: 'lookup',
      reference: 'contact'
    },
    
    converted_opportunity: {
      name: 'converted_opportunity',
      label: 'Converted Opportunity',
      type: 'lookup',
      reference: 'opportunity'
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

export default leadObject;
