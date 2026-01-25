# ObjectStack Starter Template

A multi-package starter template for building [ObjectStack](https://objectstack.ai) applications. This monorepo demonstrates the structure and conventions for creating metadata-driven low-code applications using the ObjectStack framework, with multiple examples covering different use cases.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![ObjectStack Spec](https://img.shields.io/badge/@objectstack/spec-0.3.3-green.svg)](https://www.npmjs.com/package/@objectstack/spec)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Quick Start

### Installation

```bash
# Clone this repository
git clone https://github.com/objectstack-ai/objectstack-starter.git
cd objectstack-starter

# Install dependencies (installs all workspace packages)
npm install

# Build all packages
npm run build
```

### Running Examples

This template includes multiple example applications demonstrating different use cases:

```bash
# Run the basic example (core objects)
npm run example:basic

# Run the e-commerce example
npm run example:ecommerce

# Run the blog example
npm run example:blog

# Run the CRM example
npm run example:crm

# Run the comprehensive CRM example (All core modules)
npm run example:crm-comprehensive
```

### Development

```bash
# Watch mode - automatically rebuild all packages on changes
npm run dev

# Build specific package
npm run build:core
npm run build:examples

# Type checking
npm run type-check

# Clean build artifacts
npm run clean
```

## 📦 What's Included

This starter template is organized as a monorepo with multiple packages:

### Package: @objectstack-starter/core

Core package with base objects and views:

**Data Objects:**
- **Project Task** - Task management with status, priority, assignments, and time tracking
- **Contact** - Contact management with CRM capabilities

**UI Views:**
- Task list view (grid)
- Task kanban board
- Contact list view (grid)
- Main app definition

### Package: @objectstack-starter/examples

Example applications demonstrating different use cases:

**E-commerce:**
- Product object - Product catalog management
- Order object - Order processing and tracking
- Product and order list views

**Blog:**
- Blog Post object - Content management
- Author object - Author management
- Blog post and author list views

**CRM (Comprehensive - All Core Modules):**
- **Lead Management** - Lead object with qualification and conversion tracking
- **Account Management** - Account object for business account management
- **Opportunity Management** - Opportunity object for sales pipeline tracking
- **Contact Management** - Enhanced Contact object linked to accounts
- **Case/Support Management** - Case object for customer support tickets
- **Campaign Management** - Campaign object for marketing campaigns
- **Quote Management** - Quote object for sales quotes and proposals
- **Contract Management** - Contract object for agreements and subscriptions
- **Activity Management** - Task, Event, and Call objects for activity tracking
- 12 Views including list and kanban boards for all objects

### Configuration

- `package.json` - Workspace configuration
- `packages/*/tsconfig.json` - TypeScript configuration per package
- `packages/*/package.json` - Package dependencies and scripts

## 🏗️ Project Structure

```
objectstack-starter/               # Monorepo root
├── packages/
│   ├── core/                     # @objectstack-starter/core
│   │   ├── src/
│   │   │   ├── data/            # Core data objects
│   │   │   │   ├── project-task.object.ts
│   │   │   │   └── contact.object.ts
│   │   │   ├── ui/              # Core UI views
│   │   │   │   ├── task.view.ts
│   │   │   │   ├── contact.view.ts
│   │   │   │   └── app.ts
│   │   │   ├── objectstack.config.ts
│   │   │   ├── example.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   │
│   └── examples/                 # @objectstack-starter/examples
│       ├── src/
│       │   ├── data/            # Example data objects
│       │   │   ├── product.object.ts      # E-commerce
│       │   │   ├── order.object.ts        # E-commerce
│       │   │   ├── blog-post.object.ts    # Blog
│       │   │   ├── author.object.ts       # Blog
│       │   │   ├── account.object.ts      # CRM
│       │   │   ├── opportunity.object.ts  # CRM
│       │   │   ├── lead.object.ts         # CRM
│       │   │   ├── case.object.ts         # CRM
│       │   │   ├── campaign.object.ts     # CRM
│       │   │   ├── quote.object.ts        # CRM
│       │   │   ├── contract.object.ts     # CRM
│       │   │   └── activity.object.ts     # CRM (Task, Event, Call)
│       │   ├── ui/              # Example UI views
│       │   │   ├── ecommerce.view.ts
│       │   │   ├── blog.view.ts
│       │   │   ├── crm.view.ts
│       │   │   └── crm-extended.view.ts
│       │   ├── basic-example.ts
│       │   ├── ecommerce-example.ts
│       │   ├── blog-example.ts
│       │   ├── crm-example.ts
│       │   ├── crm-comprehensive-example.ts
│       │   └── index.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md
│
├── package.json              # Workspace root configuration
└── README.md                # This file
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

## 🤖 Automation & CI/CD

This repository includes comprehensive automation workflows:

### Continuous Integration (CI)
- **CI Workflow** (`.github/workflows/ci.yml`)
  - Runs on push to `main` and `develop` branches
  - Tests on Node.js 18.x and 20.x
  - Type checking with TypeScript
  - Builds all packages
  - Runs all example scripts to validate functionality
  - Archives build artifacts

### Code Quality
- **Code Quality Workflow** (`.github/workflows/code-quality.yml`)
  - Runs on pull requests
  - Type checking
  - Build validation
  - Package structure verification
  - Example execution tests

### Release Management
- **Release Workflow** (`.github/workflows/release.yml`)
  - Triggered on version tags (e.g., `v1.0.0`)
  - Automated builds
  - GitHub release creation with auto-generated notes
  - Attaches relevant files to releases

### Dependency Management
- **Dependabot** (`.github/dependabot.yml`)
  - Automated dependency updates
  - Weekly checks for npm packages and GitHub Actions
  - Separate configurations for root, core, and examples packages
  - Auto-assigns PRs to maintainers

### Repository Automation
- **Auto-assign** (`.github/workflows/auto-assign.yml`) - Automatically assigns issues and PRs
- **Auto-label** (`.github/workflows/auto-label.yml`) - Labels PRs based on changed files
- **Stale Management** (`.github/workflows/stale.yml`) - Closes inactive issues and PRs
- **Proof HTML** (`.github/workflows/proof-html.yml`) - Validates HTML content

## 🌟 Features

- ✅ Monorepo structure with npm workspaces
- ✅ Multiple packages: core and examples
- ✅ TypeScript support with strict type checking
- ✅ Based on the latest @objectstack/spec (v0.3.3)
- ✅ **Automated CI/CD workflows** with GitHub Actions
- ✅ **Automated dependency updates** with Dependabot
- ✅ **Code quality checks** on pull requests
- ✅ Core objects: Task and Contact management
- ✅ E-commerce example: Product and Order management
- ✅ Blog example: Post and Author management
- ✅ **Comprehensive CRM example**: Complete CRM system with all core modules
  - Lead Management with qualification workflow
  - Account & Contact Management with relationships
  - Opportunity Management with sales pipeline
  - Case/Support Management for customer service
  - Campaign Management for marketing
  - Quote & Contract Management for sales
  - Activity Tracking (Tasks, Events, Calls)
  - 11 CRM objects with 12 views
- ✅ Multiple view types (grid and kanban)
- ✅ Proper project structure and configuration
- ✅ Ready to extend with AI, API, and System protocols

## 🔧 Extending This Template

### Adding a New Object to Core Package

1. Create a new file in `packages/core/src/data/` (e.g., `account.object.ts`)
2. Define your object following the Data Protocol
3. Export it from `packages/core/src/index.ts`
4. Add navigation for it in `packages/core/src/objectstack.config.ts`

### Adding a New View to Core Package

1. Create a new file in `packages/core/src/ui/` (e.g., `account.view.ts`)
2. Define your view following the UI Protocol
3. Export it from `packages/core/src/index.ts`

### Creating a New Example Package

1. Create a new directory in `packages/` (e.g., `packages/my-example`)
2. Add `package.json` with dependencies
3. Create `src/` directory with objects and views
4. Add example runner files
5. Update workspace configuration in root `package.json`

### Adding More Examples to Examples Package

1. Create new object files in `packages/examples/src/data/`
2. Create corresponding view files in `packages/examples/src/ui/`
3. Create example runner file (e.g., `my-example.ts`)
4. Export from `packages/examples/src/index.ts`
5. Add script to `packages/examples/package.json`

## 💡 Tips

- Use the TypeScript language server for IntelliSense and type checking
- Refer to the `@objectstack/spec` package for the complete protocol reference
- Follow the naming conventions strictly (camelCase for config, snake_case for data)
- Enable capabilities like `trackHistory` and `apiEnabled` as needed
- Use the `prompts/` directory in `@objectstack/spec` for AI context

---

Built with ❤️ using [ObjectStack](https://objectstack.ai)

