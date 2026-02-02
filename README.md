# ObjectStack Plugin Starter Template

A minimal starter template for creating [ObjectStack](https://objectstack.ai) plugins. This template provides a clean foundation for building plugins that extend ObjectStack with custom objects, views, and functionality.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![ObjectStack Spec](https://img.shields.io/badge/@objectstack/spec-0.8.2-green.svg)](https://www.npmjs.com/package/@objectstack/spec)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Quick Start

### Installation

```bash
# Clone this template
git clone https://github.com/objectstack-ai/objectstack-starter.git my-plugin
cd my-plugin

# Install dependencies
npm install

# Build the plugin
npm run build

# Run the example
npm run example
```

## 📦 What's Included

This starter template includes:

- **Plugin Configuration** (`src/objectstack.config.ts`) - Define your plugin metadata
- **Example Object** (`src/objects/example.object.ts`) - Sample data object definition
- **Example Views** (`src/views/example.view.ts`) - Sample list and kanban views
- **TypeScript Configuration** - Properly configured for ObjectStack development
- **Build Scripts** - Ready-to-use development and build commands

## 🏗️ Project Structure

```
objectstack-starter/
├── src/
│   ├── objectstack.config.ts    # Plugin configuration
│   ├── objects/                 # Data object definitions
│   │   └── example.object.ts
│   ├── views/                   # UI view definitions
│   │   └── example.view.ts
│   ├── index.ts                 # Main entry point
│   └── example.ts               # Usage example
├── package.json
├── tsconfig.json
└── README.md
```

## 📚 Core Concepts

### Plugin Configuration

Define your plugin's metadata in `src/objectstack.config.ts`:

```typescript
import type { System } from '@objectstack/spec';

export const config: System.ObjectStackManifest = {
  id: 'my-plugin',
  name: 'my-plugin',
  version: '0.1.0',
  type: 'plugin',
  description: 'Description of your plugin'
};
```

### Data Objects

Define data structures in `src/objects/`:

```typescript
import { Data } from '@objectstack/spec';

export const myObject = Data.ObjectSchema.create({
  name: 'my_object',      // snake_case for machine names
  label: 'My Object',
  fields: {
    name: {
      type: 'text',
      label: 'Name',
      required: true
    }
  }
});
```

### UI Views

Define how data is displayed in `src/views/`:

```typescript
import type { UI } from '@objectstack/spec';

export const myListView: UI.ListView = {
  name: 'my_list',
  label: 'My List',
  type: 'grid',
  columns: [
    { field: 'name', label: 'Name', width: 200 }
  ],
  data: {
    provider: 'object',
    object: 'my_object'
  }
};
```

## 🎯 Naming Conventions

ObjectStack follows strict naming conventions:

- **Configuration Keys** (TypeScript properties): `camelCase`
  - Example: `maxLength`, `defaultValue`, `trackHistory`
- **Machine Names** (data values): `snake_case`
  - Example: `my_object`, `first_name`, `example_field`

## 🛠️ Development

### Available Scripts

- `npm run build` - Build the plugin
- `npm run dev` - Watch mode for development
- `npm run clean` - Remove build artifacts
- `npm run type-check` - Type check without emitting files
- `npm run example` - Run the example usage

### Adding a New Object

1. Create a new file in `src/objects/` (e.g., `my-object.object.ts`)
2. Define your object using `Data.ObjectSchema.create()`
3. Export it from `src/index.ts`

### Adding a New View

1. Create a new file in `src/views/` (e.g., `my-object.view.ts`)
2. Define your view following the UI Protocol
3. Export it from `src/index.ts`

## 📖 ObjectStack Protocols

This starter template uses the ObjectStack Protocol Specification:

- **Data Protocol** - Define data structures and relationships
- **UI Protocol** - Define user interface views
- **System Protocol** - Define plugin configuration and metadata

## 🔧 Customization

### 1. Update Plugin Metadata

Edit `src/objectstack.config.ts` to set your plugin's ID, name, version, and description.

### 2. Create Your Objects

Replace or extend `src/objects/example.object.ts` with your own object definitions.

### 3. Create Your Views

Replace or extend `src/views/example.view.ts` with your own view definitions.

### 4. Export Your Definitions

Make sure to export all your objects and views in `src/index.ts`.

## 📦 Building and Publishing

### Build for Distribution

```bash
npm run build
```

This creates a `dist/` directory with compiled JavaScript and TypeScript definitions.

### Publish to npm

```bash
npm publish
```

Make sure to update `package.json` with your plugin details before publishing.

## 🤝 Integration with ObjectStack

Once built, your plugin can be:

1. **Imported** in other ObjectStack applications
2. **Registered** with an ObjectStack runtime
3. **Used** to extend ObjectStack functionality

Example integration:

```typescript
import myPlugin from '@your-org/my-plugin';

// Use in ObjectStack application
```

## 📖 Learn More

- [ObjectStack Spec](https://www.npmjs.com/package/@objectstack/spec) - Protocol specification
- [ObjectStack Documentation](https://objectstack.ai) - Full documentation
- [ObjectStack GitHub](https://github.com/objectstack-ai) - Source code and examples
- [Writing Plugins Guide](https://protocol.objectstack.ai/docs/developers/writing-plugins) - Official plugin development guide

## 💡 Tips

- Follow the naming conventions strictly (camelCase for config, snake_case for data)
- Use the TypeScript language server for IntelliSense and type checking
- Use `Data.ObjectSchema.create()` for creating objects with proper type inference
- Keep your plugin focused on a specific domain or functionality

## 📄 License

MIT

---

Built with ❤️ using [ObjectStack](https://objectstack.ai)
