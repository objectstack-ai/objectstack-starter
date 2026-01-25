import type { Data } from '@objectstack/spec';

/**
 * Contract Object
 * CRM contract and agreement management
 */
export const contractObject = {
  name: 'contract',
  label: 'Contract',
  pluralLabel: 'Contracts',
  description: 'Contract and agreement management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    contract_number: {
      name: 'contract_number',
      label: 'Contract Number',
      type: 'text',
      unique: true,
      required: true
    },
    
    contract_name: {
      name: 'contract_name',
      label: 'Contract Name',
      type: 'text',
      required: true
    },
    
    account: {
      name: 'account',
      label: 'Account',
      type: 'lookup',
      reference: 'account',
      required: true
    },
    
    status: {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'In Review', value: 'in_review' },
        { label: 'Approved', value: 'approved' },
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'Terminated', value: 'terminated' }
      ]
    },
    
    contract_type: {
      name: 'contract_type',
      label: 'Contract Type',
      type: 'select',
      options: [
        { label: 'Service Agreement', value: 'service_agreement' },
        { label: 'Subscription', value: 'subscription' },
        { label: 'License', value: 'license' },
        { label: 'Partnership', value: 'partnership' },
        { label: 'NDA', value: 'nda' },
        { label: 'SLA', value: 'sla' }
      ]
    },
    
    start_date: {
      name: 'start_date',
      label: 'Start Date',
      type: 'date',
      required: true
    },
    
    end_date: {
      name: 'end_date',
      label: 'End Date',
      type: 'date'
    },
    
    contract_term: {
      name: 'contract_term',
      label: 'Contract Term (Months)',
      type: 'number'
    },
    
    auto_renew: {
      name: 'auto_renew',
      label: 'Auto Renew',
      type: 'boolean',
      defaultValue: false
    },
    
    notice_period: {
      name: 'notice_period',
      label: 'Notice Period (Days)',
      type: 'number'
    },
    
    contract_value: {
      name: 'contract_value',
      label: 'Contract Value',
      type: 'decimal'
    },
    
    billing_frequency: {
      name: 'billing_frequency',
      label: 'Billing Frequency',
      type: 'select',
      options: [
        { label: 'Monthly', value: 'monthly' },
        { label: 'Quarterly', value: 'quarterly' },
        { label: 'Semi-Annually', value: 'semi_annually' },
        { label: 'Annually', value: 'annually' },
        { label: 'One-Time', value: 'one_time' }
      ]
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
    
    owner: {
      name: 'owner',
      label: 'Owner',
      type: 'lookup',
      reference: 'user'
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    special_terms: {
      name: 'special_terms',
      label: 'Special Terms',
      type: 'textarea'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default contractObject;
