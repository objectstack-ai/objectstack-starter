import type { Data } from '@objectstack/spec';

/**
 * Opportunity Object
 * CRM sales opportunity management
 */
export const opportunityObject = {
  name: 'opportunity',
  label: 'Opportunity',
  pluralLabel: 'Opportunities',
  description: 'Sales opportunity tracking',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    name: {
      name: 'name',
      label: 'Opportunity Name',
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
    
    stage: {
      name: 'stage',
      label: 'Stage',
      type: 'select',
      required: true,
      defaultValue: 'prospecting',
      options: [
        { label: 'Prospecting', value: 'prospecting' },
        { label: 'Qualification', value: 'qualification' },
        { label: 'Proposal', value: 'proposal' },
        { label: 'Negotiation', value: 'negotiation' },
        { label: 'Closed Won', value: 'closed_won' },
        { label: 'Closed Lost', value: 'closed_lost' }
      ]
    },
    
    amount: {
      name: 'amount',
      label: 'Amount',
      type: 'decimal',
      required: true
    },
    
    probability: {
      name: 'probability',
      label: 'Probability (%)',
      type: 'number',
      defaultValue: 50
    },
    
    expected_close_date: {
      name: 'expected_close_date',
      label: 'Expected Close Date',
      type: 'date',
      required: true
    },
    
    actual_close_date: {
      name: 'actual_close_date',
      label: 'Actual Close Date',
      type: 'date'
    },
    
    lead_source: {
      name: 'lead_source',
      label: 'Lead Source',
      type: 'select',
      options: [
        { label: 'Web', value: 'web' },
        { label: 'Referral', value: 'referral' },
        { label: 'Cold Call', value: 'cold_call' },
        { label: 'Partner', value: 'partner' },
        { label: 'Event', value: 'event' }
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
    
    next_step: {
      name: 'next_step',
      label: 'Next Step',
      type: 'text'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default opportunityObject;
