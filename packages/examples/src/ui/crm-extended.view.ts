import type { UI } from '@objectstack/spec';

/**
 * Lead List View
 * Grid view for managing leads
 */
export const leadListView: UI.ListView = {
  name: 'lead_list',
  label: 'Leads',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'lead'
  },
  columns: [
    { field: 'first_name', width: 120 },
    { field: 'last_name', width: 120 },
    { field: 'company', width: 200 },
    { field: 'email', width: 200 },
    { field: 'lead_status', width: 120 },
    { field: 'rating', width: 100 },
    { field: 'lead_source', width: 120 }
  ]
};

/**
 * Lead Kanban View
 * Kanban board for visual lead pipeline management
 */
export const leadKanbanView: UI.ListView = {
  name: 'lead_kanban',
  label: 'Lead Pipeline',
  type: 'kanban',
  data: {
    provider: 'object',
    object: 'lead'
  },
  columns: [
    'first_name',
    'last_name',
    'company',
    'email',
    'phone'
  ]
};

/**
 * Case List View
 * Grid view for managing customer support cases
 */
export const caseListView: UI.ListView = {
  name: 'case_list',
  label: 'Cases',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'case'
  },
  columns: [
    { field: 'case_number', width: 120 },
    { field: 'subject', width: 250 },
    { field: 'status', width: 140 },
    { field: 'priority', width: 100 },
    { field: 'type', width: 130 },
    { field: 'contact', width: 150 },
    { field: 'owner', width: 150 }
  ]
};

/**
 * Campaign List View
 * Grid view for managing marketing campaigns
 */
export const campaignListView: UI.ListView = {
  name: 'campaign_list',
  label: 'Campaigns',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'campaign'
  },
  columns: [
    { field: 'name', width: 250 },
    { field: 'campaign_type', width: 140 },
    { field: 'status', width: 120 },
    { field: 'start_date', width: 120 },
    { field: 'budget', width: 120 },
    { field: 'num_sent', width: 100 },
    { field: 'num_responses', width: 120 }
  ]
};

/**
 * Quote List View
 * Grid view for managing sales quotes
 */
export const quoteListView: UI.ListView = {
  name: 'quote_list',
  label: 'Quotes',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'quote'
  },
  columns: [
    { field: 'quote_number', width: 120 },
    { field: 'name', width: 200 },
    { field: 'account', width: 180 },
    { field: 'status', width: 120 },
    { field: 'total_amount', width: 130 },
    { field: 'quote_date', width: 120 },
    { field: 'valid_until', width: 120 }
  ]
};

/**
 * Contract List View
 * Grid view for managing contracts
 */
export const contractListView: UI.ListView = {
  name: 'contract_list',
  label: 'Contracts',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'contract'
  },
  columns: [
    { field: 'contract_number', width: 130 },
    { field: 'contract_name', width: 220 },
    { field: 'account', width: 180 },
    { field: 'status', width: 120 },
    { field: 'contract_type', width: 150 },
    { field: 'start_date', width: 120 },
    { field: 'end_date', width: 120 },
    { field: 'contract_value', width: 130 }
  ]
};

/**
 * Task List View
 * Grid view for managing tasks
 */
export const taskListView: UI.ListView = {
  name: 'task_list',
  label: 'Tasks',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'activity_task'
  },
  columns: [
    { field: 'subject', width: 250 },
    { field: 'status', width: 120 },
    { field: 'priority', width: 100 },
    { field: 'assigned_to', width: 150 },
    { field: 'due_date', width: 120 }
  ]
};

/**
 * Event List View
 * Grid view for managing events
 */
export const eventListView: UI.ListView = {
  name: 'event_list',
  label: 'Events',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'event'
  },
  columns: [
    { field: 'subject', width: 250 },
    { field: 'event_type', width: 140 },
    { field: 'start_datetime', width: 180 },
    { field: 'end_datetime', width: 180 },
    { field: 'location', width: 150 },
    { field: 'organizer', width: 150 }
  ]
};

/**
 * Call List View
 * Grid view for managing call logs
 */
export const callListView: UI.ListView = {
  name: 'call_list',
  label: 'Call Logs',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'call'
  },
  columns: [
    { field: 'subject', width: 200 },
    { field: 'call_type', width: 100 },
    { field: 'call_purpose', width: 130 },
    { field: 'call_datetime', width: 180 },
    { field: 'call_duration', width: 120 },
    { field: 'call_result', width: 130 },
    { field: 'caller', width: 150 }
  ]
};

export default {
  leadListView,
  leadKanbanView,
  caseListView,
  campaignListView,
  quoteListView,
  contractListView,
  taskListView,
  eventListView,
  callListView
};
