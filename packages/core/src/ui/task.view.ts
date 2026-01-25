import type { UI } from '@objectstack/spec';

/**
 * Task List View
 * Defines the grid view for project tasks
 */
export const taskListView = {
  name: 'task_list',
  label: 'All Tasks',
  type: 'grid',
  
  // Data source configuration
  data: {
    provider: 'object',
    object: 'project_task'
  },
  
  // Columns to display
  columns: [
    { field: 'name', width: 250 },
    { field: 'status', width: 120 },
    { field: 'priority', width: 100 },
    { field: 'assigned_to', width: 150 },
    { field: 'due_date', width: 120 }
  ],
  
  // Default sort
  sort: [
    { field: 'due_date', order: 'asc' },
    { field: 'priority', order: 'desc' }
  ]
} as UI.ListView;

/**
 * Task Kanban View
 * Kanban board view for tasks organized by status
 */
export const taskKanbanView = {
  name: 'task_kanban',
  label: 'Task Board',
  type: 'kanban',
  
  // Data source configuration
  data: {
    provider: 'object',
    object: 'project_task'
  },
  
  // Card fields to display
  columns: [
    'name',
    'priority',
    'assigned_to',
    'due_date'
  ]
} as UI.ListView;

export default {
  taskListView,
  taskKanbanView
};
