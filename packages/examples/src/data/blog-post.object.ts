import type { Data } from '@objectstack/spec';

/**
 * Blog Post Object
 * Blog post content management
 */
export const blogPostObject = {
  name: 'blog_post',
  label: 'Blog Post',
  pluralLabel: 'Blog Posts',
  description: 'Blog content management',
  active: true,
  isSystem: false,
  abstract: false,
  datasource: 'default',
  
  fields: {
    title: {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true
    },
    
    slug: {
      name: 'slug',
      label: 'URL Slug',
      type: 'text',
      required: true,
      unique: true
    },
    
    content: {
      name: 'content',
      label: 'Content',
      type: 'textarea',
      required: true
    },
    
    excerpt: {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea'
    },
    
    author: {
      name: 'author',
      label: 'Author',
      type: 'lookup',
      reference: 'author'
    },
    
    status: {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' }
      ]
    },
    
    published_date: {
      name: 'published_date',
      label: 'Published Date',
      type: 'datetime'
    },
    
    featured_image: {
      name: 'featured_image',
      label: 'Featured Image',
      type: 'url'
    },
    
    categories: {
      name: 'categories',
      label: 'Categories',
      type: 'text'
    },
    
    tags: {
      name: 'tags',
      label: 'Tags',
      type: 'text'
    },
    
    view_count: {
      name: 'view_count',
      label: 'View Count',
      type: 'number',
      defaultValue: 0
    }
  },
  
  enable: {
    apiEnabled: true,
    trackHistory: true,
    searchable: true
  }
} as unknown as Data.ServiceObject;

export default blogPostObject;
