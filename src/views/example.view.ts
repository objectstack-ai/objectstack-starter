import type { UI } from '@objectstack/spec';

/**
 * Example List View
 * 
 * This demonstrates how to define a list view in ObjectStack.
 * Views define how data is displayed in the UI.
 */
export const exampleListView: UI.ListView = {
  /**
   * View name (machine name, use snake_case)
   */
  name: 'example_list',
  
  /**
   * Human-readable label
   */
  label: 'Examples',
  
  /**
   * View type - determines how data is displayed
   * Common types: 'grid', 'kanban', 'calendar', 'gallery'
   */
  type: 'grid',
  
  /**
   * Column definitions for grid view
   */
  columns: [
    {
      field: 'name',
      label: 'Name',
      width: 200
    },
    {
      field: 'description',
      label: 'Description',
      width: 300
    },
    {
      field: 'status',
      label: 'Status',
      width: 120
    },
    {
      field: 'created_at',
      label: 'Created',
      width: 150
    }
  ],
  
  /**
   * Data provider configuration
   */
  data: {
    provider: 'object',
    object: 'example_object'
  }
};

/**
 * Example Kanban View
 * 
 * Demonstrates a kanban board view organized by status
 */
export const exampleKanbanView: UI.ListView = {
  /**
   * View name
   */
  name: 'example_kanban',
  
  /**
   * Human-readable label
   */
  label: 'Examples Board',
  
  /**
   * View type for kanban board
   */
  type: 'kanban',
  
  /**
   * Columns to display (required for all views)
   */
  columns: ['name', 'status', 'created_at'],
  
  /**
   * Data provider configuration
   */
  data: {
    provider: 'object',
    object: 'example_object'
  },
  
  /**
   * Kanban configuration
   */
  kanban: {
    groupByField: 'status',
    columns: ['draft', 'active', 'archived']
  }
};
