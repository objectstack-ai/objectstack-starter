import type { Data } from '@objectstack/spec';

/**
 * Activity Task Object
 * CRM task and to-do management
 */
const activityTaskObject = {
  name: 'activity_task',
  label: 'Task',
  pluralLabel: 'Tasks',
  description: 'Task and to-do management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    subject: {
      name: 'subject',
      label: 'Subject',
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
        { label: 'Deferred', value: 'deferred' },
        { label: 'Waiting', value: 'waiting' }
      ]
    },
    
    priority: {
      name: 'priority',
      label: 'Priority',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' }
      ]
    },
    
    due_date: {
      name: 'due_date',
      label: 'Due Date',
      type: 'date'
    },
    
    reminder_date: {
      name: 'reminder_date',
      label: 'Reminder Date',
      type: 'datetime'
    },
    
    assigned_to: {
      name: 'assigned_to',
      label: 'Assigned To',
      type: 'lookup',
      reference: 'user',
      required: true
    },
    
    related_to: {
      name: 'related_to',
      label: 'Related To',
      type: 'text',
      description: 'Reference to related object (Account, Opportunity, etc.)'
    },
    
    related_to_id: {
      name: 'related_to_id',
      label: 'Related To ID',
      type: 'text'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

/**
 * Event Object
 * CRM event and meeting management
 */
const eventObject = {
  name: 'event',
  label: 'Event',
  pluralLabel: 'Events',
  description: 'Event and meeting management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    subject: {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    location: {
      name: 'location',
      label: 'Location',
      type: 'text'
    },
    
    start_datetime: {
      name: 'start_datetime',
      label: 'Start Date & Time',
      type: 'datetime',
      required: true
    },
    
    end_datetime: {
      name: 'end_datetime',
      label: 'End Date & Time',
      type: 'datetime',
      required: true
    },
    
    all_day_event: {
      name: 'all_day_event',
      label: 'All Day Event',
      type: 'boolean',
      defaultValue: false
    },
    
    event_type: {
      name: 'event_type',
      label: 'Event Type',
      type: 'select',
      options: [
        { label: 'Meeting', value: 'meeting' },
        { label: 'Call', value: 'call' },
        { label: 'Demo', value: 'demo' },
        { label: 'Presentation', value: 'presentation' },
        { label: 'Conference', value: 'conference' },
        { label: 'Training', value: 'training' }
      ]
    },
    
    organizer: {
      name: 'organizer',
      label: 'Organizer',
      type: 'lookup',
      reference: 'user',
      required: true
    },
    
    reminder: {
      name: 'reminder',
      label: 'Reminder',
      type: 'select',
      options: [
        { label: 'None', value: 'none' },
        { label: '15 minutes before', value: '15min' },
        { label: '30 minutes before', value: '30min' },
        { label: '1 hour before', value: '1hour' },
        { label: '1 day before', value: '1day' }
      ]
    },
    
    related_to: {
      name: 'related_to',
      label: 'Related To',
      type: 'text',
      description: 'Reference to related object (Account, Opportunity, etc.)'
    },
    
    related_to_id: {
      name: 'related_to_id',
      label: 'Related To ID',
      type: 'text'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

/**
 * Call Object
 * CRM call log management
 */
const callObject = {
  name: 'call',
  label: 'Call',
  pluralLabel: 'Calls',
  description: 'Call log and tracking',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    subject: {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true
    },
    
    call_type: {
      name: 'call_type',
      label: 'Call Type',
      type: 'select',
      required: true,
      options: [
        { label: 'Inbound', value: 'inbound' },
        { label: 'Outbound', value: 'outbound' }
      ]
    },
    
    call_purpose: {
      name: 'call_purpose',
      label: 'Call Purpose',
      type: 'select',
      options: [
        { label: 'Prospecting', value: 'prospecting' },
        { label: 'Follow Up', value: 'follow_up' },
        { label: 'Demo', value: 'demo' },
        { label: 'Support', value: 'support' },
        { label: 'Negotiation', value: 'negotiation' }
      ]
    },
    
    call_duration: {
      name: 'call_duration',
      label: 'Call Duration (minutes)',
      type: 'number'
    },
    
    call_datetime: {
      name: 'call_datetime',
      label: 'Call Date & Time',
      type: 'datetime',
      required: true
    },
    
    call_result: {
      name: 'call_result',
      label: 'Call Result',
      type: 'select',
      options: [
        { label: 'Connected', value: 'connected' },
        { label: 'Left Voicemail', value: 'voicemail' },
        { label: 'No Answer', value: 'no_answer' },
        { label: 'Busy', value: 'busy' },
        { label: 'Wrong Number', value: 'wrong_number' }
      ]
    },
    
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    
    caller: {
      name: 'caller',
      label: 'Caller',
      type: 'lookup',
      reference: 'user',
      required: true
    },
    
    related_to: {
      name: 'related_to',
      label: 'Related To',
      type: 'text',
      description: 'Reference to related object (Account, Contact, etc.)'
    },
    
    related_to_id: {
      name: 'related_to_id',
      label: 'Related To ID',
      type: 'text'
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export { activityTaskObject, eventObject, callObject };
export default { activityTaskObject, eventObject, callObject };
