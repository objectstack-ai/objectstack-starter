# @objectstack-starter/core

Core package for ObjectStack Starter - includes base objects and views for task and contact management.

## What's Included

### Data Objects

- **Project Task** (`project_task`) - Task management with status, priority, assignments, and time tracking
- **Contact** (`contact`) - Contact management with CRM capabilities

### UI Views

- **Task Views**
  - Grid view for task lists
  - Kanban board for visual task management
- **Contact Views**
  - Grid view for contact management
- **App Definition** - Main application structure and navigation

## Installation

```bash
npm install @objectstack-starter/core
```

## Usage

```typescript
import {
  config,
  projectTaskObject,
  contactObject,
  taskListView,
  taskKanbanView,
  contactListView,
  mainApp
} from '@objectstack-starter/core';

console.log('Task Fields:', Object.keys(projectTaskObject.fields));
console.log('Contact Fields:', Object.keys(contactObject.fields));
```

## API

### Exports

- `config` - ObjectStack manifest configuration
- `projectTaskObject` - Project task data object definition
- `contactObject` - Contact data object definition
- `taskListView` - Task grid view definition
- `taskKanbanView` - Task kanban view definition
- `contactListView` - Contact grid view definition
- `mainApp` - Main application definition

### Type Exports

Re-exports all types from `@objectstack/spec`:
- `Data` - Data Protocol types
- `UI` - UI Protocol types
- `System` - System Protocol types
- `AI` - AI Protocol types
- `API` - API Protocol types

## Development

```bash
# Build the package
npm run build

# Watch mode
npm run dev

# Type checking
npm run type-check

# Clean build artifacts
npm run clean
```

## License

MIT
