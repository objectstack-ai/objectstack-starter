import { Data } from '@objectstack/spec';

/**
 * Example Object Definition
 * 
 * This demonstrates how to define a data object in ObjectStack.
 * Objects define the structure of your data entities.
 */
export const exampleObject = Data.ObjectSchema.create({
  /**
   * Object name (machine name, use snake_case)
   */
  name: 'example_object',
  
  /**
   * Human-readable label (singular)
   */
  label: 'Example',
  
  /**
   * Human-readable label (plural)
   */
  pluralLabel: 'Examples',
  
  /**
   * Object description
   */
  description: 'An example object to demonstrate ObjectStack data modeling',
  
  /**
   * Field definitions
   */
  fields: {
    /**
     * Name field (required text field)
     */
    name: {
      type: 'text',
      label: 'Name',
      required: true
    },
    
    /**
     * Description field (optional textarea)
     */
    description: {
      type: 'textarea',
      label: 'Description'
    },
    
    /**
     * Status field (select field with predefined options)
     */
    status: {
      type: 'select',
      label: 'Status',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Active', value: 'active' },
        { label: 'Archived', value: 'archived' }
      ]
    },
    
    /**
     * Created date (automatically managed)
     */
    created_at: {
      type: 'datetime',
      label: 'Created At'
    }
  }
});
