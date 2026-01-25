import type { Data } from '@objectstack/spec';

/**
 * Campaign Object
 * CRM marketing campaign management
 */
export const campaignObject = {
  name: 'campaign',
  label: 'Campaign',
  pluralLabel: 'Campaigns',
  description: 'Marketing campaign management and tracking',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    name: {
      name: 'name',
      label: 'Campaign Name',
      type: 'text',
      required: true
    },
    
    campaign_type: {
      name: 'campaign_type',
      label: 'Campaign Type',
      type: 'select',
      required: true,
      options: [
        { label: 'Email', value: 'email' },
        { label: 'Webinar', value: 'webinar' },
        { label: 'Conference', value: 'conference' },
        { label: 'Trade Show', value: 'trade_show' },
        { label: 'Advertisement', value: 'advertisement' },
        { label: 'Direct Mail', value: 'direct_mail' },
        { label: 'Social Media', value: 'social_media' },
        { label: 'Other', value: 'other' }
      ]
    },
    
    status: {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'planned',
      options: [
        { label: 'Planned', value: 'planned' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Aborted', value: 'aborted' }
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
    
    budget: {
      name: 'budget',
      label: 'Budget',
      type: 'decimal'
    },
    
    actual_cost: {
      name: 'actual_cost',
      label: 'Actual Cost',
      type: 'decimal'
    },
    
    expected_revenue: {
      name: 'expected_revenue',
      label: 'Expected Revenue',
      type: 'decimal'
    },
    
    expected_response: {
      name: 'expected_response',
      label: 'Expected Response (%)',
      type: 'number'
    },
    
    num_sent: {
      name: 'num_sent',
      label: 'Number Sent',
      type: 'number'
    },
    
    num_responses: {
      name: 'num_responses',
      label: 'Number of Responses',
      type: 'number'
    },
    
    num_converted: {
      name: 'num_converted',
      label: 'Number Converted',
      type: 'number'
    },
    
    parent_campaign: {
      name: 'parent_campaign',
      label: 'Parent Campaign',
      type: 'lookup',
      reference: 'campaign'
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    owner: {
      name: 'owner',
      label: 'Owner',
      type: 'lookup',
      reference: 'user'
    },
    
    is_active: {
      name: 'is_active',
      label: 'Active',
      type: 'boolean',
      defaultValue: true
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default campaignObject;
