# ObjectStack Starter Template

A starter template for building [ObjectStack](https://objectstack.ai) applications. This template demonstrates the basic structure and conventions for creating metadata-driven low-code applications using the ObjectStack framework.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![ObjectStack Spec](https://img.shields.io/badge/@objectstack/spec-0.3.3-green.svg)](https://www.npmjs.com/package/@objectstack/spec)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Quick Start

### Installation

```bash
# Clone this repository
git clone https://github.com/objectstack-ai/objectstack-starter.git
cd objectstack-starter

# Install dependencies
npm install

# Build the project
npm run build
```

### Development

```bash
# Watch mode - automatically rebuild on changes
npm run dev

# Type checking
npm run type-check

# Clean build artifacts
npm run clean
```

### Running the Example

The template includes an example file demonstrating how to use the defined objects and views:

```bash
# Build the project
npm run build

# Run the example
node dist/example.js
```

This will show you how to import and work with the ObjectStack definitions.

## 📦 What's Included

This starter template includes:

### Data Objects (`src/data/`)

- **Project Task** (`project-task.object.ts`) - Task management with status, priority, assignments, and time tracking
- **Contact** (`contact.object.ts`) - Contact management with CRM capabilities

### UI Views (`src/ui/`)

- **Task Views** (`task.view.ts`)
  - Grid view for task lists
  - Kanban board for visual task management
- **Contact Views** (`contact.view.ts`)
  - Grid view for contact management
- **App Definition** (`app.ts`) - Main application structure and navigation

### Configuration

- `objectstack.config.ts` - ObjectStack manifest with app metadata, navigation, and permissions
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## 🏗️ Project Structure

```
objectstack-starter/
├── src/
│   ├── data/              # Data object definitions
│   │   ├── project-task.object.ts
│   │   └── contact.object.ts
│   ├── ui/                # UI views and app definitions
│   │   ├── task.view.ts
│   │   ├── contact.view.ts
│   │   └── app.ts
│   ├── system/            # System configurations (future)
│   ├── ai/                # AI agents and prompts (future)
│   ├── api/               # API definitions (future)
│   └── index.ts           # Main export file
├── objectstack.config.ts  # ObjectStack manifest
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project configuration
└── README.md             # This file
```

## 📚 ObjectStack Concepts

### Data Protocol (ObjectQL)

Define your data structures using the ObjectStack Data Protocol:

```typescript
import type { Data } from '@objectstack/spec';

export const myObject: Data.ObjectDefinition = {
  name: 'my_object',  // snake_case for machine names
  label: 'My Object',
  fields: {
    my_field: {
      name: 'my_field',
      label: 'My Field',
      type: 'text',
      required: true
    }
  },
  enable: {
    apiEnabled: true,
    trackHistory: true
  }
};
```

### UI Protocol (ObjectUI)

Define views for your data:

```typescript
import type { UI } from '@objectstack/spec';

export const myListView: UI.ListView = {
  name: 'my_list',
  label: 'My List',
  type: 'grid',
  object: 'my_object',
  columns: [
    { field: 'my_field', width: 200 }
  ]
};
```

### System Protocol (ObjectOS)

Configure your application:

```typescript
import type { System } from '@objectstack/spec';

export const config: System.Manifest = {
  name: 'my-app',
  type: 'app',
  displayName: 'My Application',
  navigation: [
    {
      type: 'object',
      object: 'my_object',
      label: 'My Objects'
    }
  ]
};
```

## 🎯 Naming Conventions

ObjectStack follows strict naming conventions:

- **Configuration Keys** (TypeScript properties): `camelCase`
  - Example: `maxLength`, `defaultValue`, `referenceFilters`
- **Machine Names** (data values): `snake_case`
  - Example: `project_task`, `first_name`, `my_object`

## 📖 Learn More

- [ObjectStack Spec](https://www.npmjs.com/package/@objectstack/spec) - The protocol specification
- [ObjectStack Documentation](https://objectstack.ai) - Full documentation
- [ObjectStack GitHub](https://github.com/objectstack-ai) - Source code and examples

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Features

- ✅ TypeScript support with strict type checking
- ✅ Based on the latest @objectstack/spec (v0.3.3)
- ✅ Example data objects following ObjectStack conventions
- ✅ Example UI views (grid and kanban)
- ✅ Proper project structure and configuration
- ✅ Ready to extend with AI, API, and System protocols

## 🔧 Extending This Template

### Adding a New Object

1. Create a new file in `src/data/` (e.g., `account.object.ts`)
2. Define your object following the Data Protocol
3. Export it from `src/index.ts`
4. Add navigation for it in `objectstack.config.ts`

### Adding a New View

1. Create a new file in `src/ui/` (e.g., `account.view.ts`)
2. Define your view following the UI Protocol
3. Export it from `src/index.ts`

### Adding AI Capabilities

1. Create files in `src/ai/` for agents and prompts
2. Use the AI Protocol from `@objectstack/spec/ai`

### Adding API Endpoints

1. Create files in `src/api/` for endpoint definitions
2. Use the API Protocol from `@objectstack/spec/api`

## 💡 Tips

- Use the TypeScript language server for IntelliSense and type checking
- Refer to the `@objectstack/spec` package for the complete protocol reference
- Follow the naming conventions strictly (camelCase for config, snake_case for data)
- Enable capabilities like `trackHistory` and `apiEnabled` as needed
- Use the `prompts/` directory in `@objectstack/spec` for AI context

---

Built with ❤️ using [ObjectStack](https://objectstack.ai)

