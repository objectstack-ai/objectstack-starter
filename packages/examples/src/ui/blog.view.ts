import type { UI } from '@objectstack/spec';

/**
 * Blog Post List View
 * Grid view for managing blog posts
 */
export const blogPostListView: UI.ListView = {
  name: 'blog_post_list',
  label: 'Blog Posts',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'blog_post'
  },
  columns: [
    { field: 'title', width: 300 },
    { field: 'author', width: 150 },
    { field: 'status', width: 120 },
    { field: 'published_date', width: 150 },
    { field: 'view_count', width: 100 }
  ]
};

/**
 * Author List View
 * Grid view for managing authors
 */
export const authorListView: UI.ListView = {
  name: 'author_list',
  label: 'Authors',
  type: 'grid',
  data: {
    provider: 'object',
    object: 'author'
  },
  columns: [
    { field: 'name', width: 200 },
    { field: 'email', width: 200 },
    { field: 'website', width: 200 },
    { field: 'is_active', width: 80 },
    { field: 'joined_date', width: 120 }
  ]
};

export default { blogPostListView, authorListView };
