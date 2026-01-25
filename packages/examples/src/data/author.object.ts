import type { Data } from '@objectstack/spec';

/**
 * Author Object
 * Blog author/content creator management
 */
export const authorObject = {
  name: 'author',
  label: 'Author',
  pluralLabel: 'Authors',
  description: 'Content author management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    name: {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true
    },
    
    email: {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true
    },
    
    bio: {
      name: 'bio',
      label: 'Biography',
      type: 'textarea'
    },
    
    avatar_url: {
      name: 'avatar_url',
      label: 'Avatar URL',
      type: 'url'
    },
    
    website: {
      name: 'website',
      label: 'Website',
      type: 'url'
    },
    
    social_twitter: {
      name: 'social_twitter',
      label: 'Twitter Handle',
      type: 'text'
    },
    
    social_github: {
      name: 'social_github',
      label: 'GitHub Username',
      type: 'text'
    },
    
    is_active: {
      name: 'is_active',
      label: 'Active',
      type: 'boolean',
      defaultValue: true
    },
    
    joined_date: {
      name: 'joined_date',
      label: 'Joined Date',
      type: 'date',
      required: true
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default authorObject;
