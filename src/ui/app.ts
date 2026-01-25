import type { UI } from '@objectstack/spec';

/**
 * Main Application
 * Defines the main application structure and navigation
 */
export const mainApp = {
  name: 'main_app',
  label: 'ObjectStack Starter',
  description: 'Main application for the ObjectStack starter template',
  
  // Navigation menu structure
  navigation: [
    {
      type: 'group',
      label: 'Work',
      children: [
        {
          type: 'object',
          object: 'project_task',
          label: 'Tasks',
          icon: 'CheckSquare'
        }
      ]
    },
    {
      type: 'group',
      label: 'CRM',
      children: [
        {
          type: 'object',
          object: 'contact',
          label: 'Contacts',
          icon: 'Users'
        }
      ]
    }
  ],
  
  // Branding
  branding: {
    logo: '/logo.svg',
    primaryColor: '#2563eb'
  }
} as UI.App;

export default mainApp;
