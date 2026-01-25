import type { Data } from '@objectstack/spec';

/**
 * Case Object
 * CRM customer support case/ticket management
 */
export const caseObject = {
  name: 'case',
  label: 'Case',
  pluralLabel: 'Cases',
  description: 'Customer support case and ticket management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    case_number: {
      name: 'case_number',
      label: 'Case Number',
      type: 'text',
      unique: true
    },
    
    subject: {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true
    },
    
    status: {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Waiting on Customer', value: 'waiting_customer' },
        { label: 'Waiting on Internal', value: 'waiting_internal' },
        { label: 'Escalated', value: 'escalated' },
        { label: 'Resolved', value: 'resolved' },
        { label: 'Closed', value: 'closed' }
      ]
    },
    
    priority: {
      name: 'priority',
      label: 'Priority',
      type: 'select',
      required: true,
      defaultValue: 'medium',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
        { label: 'Critical', value: 'critical' }
      ]
    },
    
    type: {
      name: 'type',
      label: 'Case Type',
      type: 'select',
      options: [
        { label: 'Question', value: 'question' },
        { label: 'Problem', value: 'problem' },
        { label: 'Feature Request', value: 'feature_request' },
        { label: 'Bug', value: 'bug' },
        { label: 'Refund', value: 'refund' }
      ]
    },
    
    origin: {
      name: 'origin',
      label: 'Case Origin',
      type: 'select',
      options: [
        { label: 'Email', value: 'email' },
        { label: 'Phone', value: 'phone' },
        { label: 'Web', value: 'web' },
        { label: 'Chat', value: 'chat' },
        { label: 'Social Media', value: 'social_media' }
      ]
    },
    
    account: {
      name: 'account',
      label: 'Account',
      type: 'lookup',
      reference: 'account'
    },
    
    contact: {
      name: 'contact',
      label: 'Contact',
      type: 'lookup',
      reference: 'contact',
      required: true
    },
    
    product: {
      name: 'product',
      label: 'Product',
      type: 'lookup',
      reference: 'product'
    },
    
    owner: {
      name: 'owner',
      label: 'Owner',
      type: 'lookup',
      reference: 'user',
      required: true
    },
    
    resolution: {
      name: 'resolution',
      label: 'Resolution',
      type: 'textarea'
    },
    
    reported_date: {
      name: 'reported_date',
      label: 'Reported Date',
      type: 'datetime',
      defaultValue: 'now'
    },
    
    closed_date: {
      name: 'closed_date',
      label: 'Closed Date',
      type: 'datetime'
    },
    
    sla_violation: {
      name: 'sla_violation',
      label: 'SLA Violation',
      type: 'boolean',
      defaultValue: false
    },
    
    internal_comments: {
      name: 'internal_comments',
      label: 'Internal Comments',
      type: 'textarea'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default caseObject;
