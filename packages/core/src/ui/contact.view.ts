import type { UI } from '@objectstack/spec';

/**
 * Contact List View
 * Defines the grid view for contacts
 */
export const contactListView = {
  name: 'contact_list',
  label: 'All Contacts',
  type: 'grid',
  
  // Data source configuration
  data: {
    provider: 'object',
    object: 'contact'
  },
  
  // Columns to display
  columns: [
    { field: 'first_name', width: 150 },
    { field: 'last_name', width: 150 },
    { field: 'email', width: 200 },
    { field: 'phone', width: 130 },
    { field: 'company', width: 180 },
    { field: 'contact_type', width: 120 }
  ],
  
  // Default sort by last name
  sort: [
    { field: 'last_name', order: 'asc' },
    { field: 'first_name', order: 'asc' }
  ]
} as UI.ListView;

export default contactListView;
