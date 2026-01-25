import type { UI } from '@objectstack/spec';

/**
 * Account List View
 * Grid view for managing accounts
 */
export const accountListView: UI.ListView = {
  name: 'account_list',
  label: 'Accounts',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'account'
  },
  columns: [
    { field: 'name', width: 250 },
    { field: 'industry', width: 150 },
    { field: 'type', width: 120 },
    { field: 'annual_revenue', width: 150 },
    { field: 'employee_count', width: 120 },
    { field: 'phone', width: 150 }
  ]
};

/**
 * Opportunity List View
 * Grid view for managing opportunities
 */
export const opportunityListView: UI.ListView = {
  name: 'opportunity_list',
  label: 'Opportunities',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'opportunity'
  },
  columns: [
    { field: 'name', width: 250 },
    { field: 'account', width: 200 },
    { field: 'stage', width: 150 },
    { field: 'amount', width: 120 },
    { field: 'probability', width: 100 },
    { field: 'expected_close_date', width: 150 }
  ]
};

/**
 * Opportunity Kanban View
 * Kanban board for visual opportunity pipeline management
 */
export const opportunityKanbanView: UI.ListView = {
  name: 'opportunity_kanban',
  label: 'Sales Pipeline',
  type: 'kanban',
  data: {
    provider: 'object',
    object: 'opportunity'
  },
  columns: [
    'name',
    'amount',
    'probability',
    'expected_close_date'
  ]
};

export default { accountListView, opportunityListView, opportunityKanbanView };
