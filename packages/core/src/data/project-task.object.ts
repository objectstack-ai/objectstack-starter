import type { Data } from '@objectstack/spec';

/**
 * Project Task Object
 * Defines the schema for project task management
 */
export const projectTaskObject = {
  name: 'project_task',
  label: 'Task',
  pluralLabel: 'Tasks',
  description: 'Project task management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    name: {
      name: 'name',
      label: 'Task Name',
      type: 'text',
      required: true
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    status: {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'not_started',
      options: [
        { label: 'Not Started', value: 'not_started' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Blocked', value: 'blocked' }
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
        { label: 'Urgent', value: 'urgent' }
      ]
    },
    
    assigned_to: {
      name: 'assigned_to',
      label: 'Assigned To',
      type: 'lookup',
      reference: 'user'
    },
    
    due_date: {
      name: 'due_date',
      label: 'Due Date',
      type: 'date'
    },
    
    completed_date: {
      name: 'completed_date',
      label: 'Completed Date',
      type: 'datetime'
    }
  },
  
  // Enable capabilities
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default projectTaskObject;
