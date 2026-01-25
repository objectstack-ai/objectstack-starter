# Automation Workflows

This document provides an overview of all automation workflows configured in this repository.

## Continuous Integration & Deployment

### CI Workflow (`ci.yml`)
**Trigger:** Push to `main` or `develop`, Pull Requests, Manual dispatch

**What it does:**
- Tests code on Node.js 18.x and 20.x
- Installs dependencies using `npm ci`
- Runs TypeScript type checking
- Builds all workspace packages
- Runs all example scripts to validate functionality:
  - Basic example
  - E-commerce example
  - Blog example
  - CRM example
  - Comprehensive CRM example
- Archives build artifacts (for Node.js 20.x)

**Matrix Strategy:** Tests on multiple Node.js versions to ensure compatibility

---

### Code Quality Workflow (`code-quality.yml`)
**Trigger:** Pull Requests to `main` or `develop`, Manual dispatch

**What it does:**
- Runs comprehensive TypeScript type checking
- Verifies successful build without TypeScript errors
- Validates package structure (directories and files exist)
- Tests that examples can execute successfully

**Purpose:** Ensures code quality before merging PRs

---

### Release Workflow (`release.yml`)
**Trigger:** Git tags matching `v*.*.*` pattern (e.g., v1.0.0), Manual dispatch

**What it does:**
- Builds all packages
- Creates GitHub releases automatically
- Generates release notes from commits
- Attaches package.json files and documentation to release

**Usage:** Create and push a version tag to trigger a release:
```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## Dependency Management

### Dependabot (`dependabot.yml`)
**Trigger:** Weekly on Mondays

**What it does:**
- Checks for npm dependency updates in:
  - Root package
  - Core package (`packages/core`)
  - Examples package (`packages/examples`)
- Checks for GitHub Actions updates
- Creates PRs with dependency updates
- Auto-assigns PRs to `hotlong`
- Limits to 5 PRs per ecosystem
- Adds appropriate labels (dependencies, core, examples, github-actions)

**Configuration:**
- Conventional commit messages with scope
- Weekly schedule
- Separate configurations for better organization

---

## Repository Automation

### Auto-assign Workflow (`auto-assign.yml`)
**Trigger:** New issues or pull requests

**What it does:**
- Automatically assigns new issues and PRs to `hotlong`
- Assigns 1 person per issue/PR

---

### Auto-label Workflow (`auto-label.yml`)
**Trigger:** PR opened, synchronized, or reopened

**What it does:**
- Automatically labels PRs based on changed files:
  - `core` - Changes in packages/core
  - `examples` - Changes in packages/examples
  - `documentation` - Changes in markdown files
  - `dependencies` - Changes in package.json files
  - `ci/cd` - Changes in workflow files
  - `typescript` - Changes in TypeScript files
  - `configuration` - Changes in config files

**Configuration:** Uses `.github/labeler.yml` for label rules

---

### Stale Issues/PRs Workflow (`stale.yml`)
**Trigger:** Daily at 00:00 UTC, Manual dispatch

**What it does:**
- Marks issues as stale after 60 days of inactivity
- Closes stale issues after 7 additional days
- Marks PRs as stale after 30 days of inactivity
- Closes stale PRs after 7 additional days
- Removes stale label when activity resumes
- Exempts pinned, security, and enhancement issues
- Exempts pinned, security, and work-in-progress PRs

**Purpose:** Keeps the issue tracker clean and organized

---

### Proof HTML Workflow (`proof-html.yml`)
**Trigger:** Push to any branch, Manual dispatch

**What it does:**
- Validates HTML content in the repository
- Checks for broken links and HTML issues

---

## Best Practices

### For Contributors
1. **Before creating a PR:**
   - Run `npm run type-check` locally
   - Run `npm run build` to ensure no build errors
   - Test relevant examples

2. **Dependency updates:**
   - Review Dependabot PRs regularly
   - Test changes before merging

3. **Releases:**
   - Use semantic versioning (MAJOR.MINOR.PATCH)
   - Tag releases with `v` prefix (e.g., v1.0.0)

### For Maintainers
1. **Weekly tasks:**
   - Review Dependabot PRs
   - Check stale issues/PRs
   - Monitor CI failures

2. **Release process:**
   - Update version in package.json files
   - Create and push git tag
   - Verify release workflow success

3. **Workflow maintenance:**
   - Keep GitHub Actions up to date
   - Review workflow runs regularly
   - Adjust stale timings as needed

## Troubleshooting

### CI Failures
1. Check the workflow run in GitHub Actions tab
2. Review error logs for specific failures
3. Run the same commands locally to reproduce
4. Common issues:
   - TypeScript errors: Run `npm run type-check`
   - Build errors: Run `npm run build`
   - Example failures: Run specific example script

### Dependabot Issues
1. Check for breaking changes in dependency updates
2. Review changelogs of updated packages
3. Test locally before merging
4. Adjust version constraints if needed

### Stale Bot False Positives
1. Add `pinned` label to keep issues open
2. Comment on issues to reset the timer
3. Adjust stale timings in `stale.yml` if needed

## Workflow Files

- `.github/workflows/ci.yml` - Main CI pipeline
- `.github/workflows/code-quality.yml` - Code quality checks
- `.github/workflows/release.yml` - Release automation
- `.github/workflows/auto-assign.yml` - Auto-assignment
- `.github/workflows/auto-label.yml` - Auto-labeling
- `.github/workflows/stale.yml` - Stale issue management
- `.github/workflows/proof-html.yml` - HTML validation
- `.github/dependabot.yml` - Dependency update config
- `.github/labeler.yml` - Auto-labeling rules
