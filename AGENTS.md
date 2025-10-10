# Agent Instructions for Rose Monorepo

This file contains important information and guidelines for coding agents working on the Rose project.

## Repository Structure

This is a **monorepo** containing multiple related projects:

1. **directus/** - Directus CMS instance with configuration and deployment setup
2. **website1/** - First React website application
3. **website2/** - Second React website application

## Key Principles

### Monorepo Guidelines
- Each project is independent but may share common dependencies or configurations
- Keep project-specific code within their respective directories
- Shared utilities or configurations should be clearly documented

### Working with Directus
- Directus serves as the content management system (CMS) for both React websites
- Both websites consume collections/APIs from Directus
- Directus deployment configuration is still being developed
- Refer to `directus/AGENTS.md` for Directus-specific instructions

### Working with React Websites
- Both websites are React applications
- They consume data from Directus collections
- Each website has its own deployment configuration
- Refer to `website1/AGENTS.md` and `website2/AGENTS.md` for project-specific instructions

## Project-Specific Agent Instructions

Each project directory contains its own `AGENTS.md` file with detailed instructions:

- `/directus/AGENTS.md` - Directus CMS configuration and deployment
- `/website1/AGENTS.md` - First React website
- `/website2/AGENTS.md` - Second React website

Always check the project-specific AGENTS.md file before making changes to that project.

## Making Changes

When working on this codebase:

1. Read the relevant AGENTS.md file for the project you're modifying
2. Understand the dependencies between projects (especially Directus ↔ websites)
3. Test changes locally before committing
4. Document any new patterns or important decisions in the appropriate AGENTS.md file

## Dependencies Between Projects

```
Directus (CMS/Backend)
    ↓
    ├─→ Website 1 (React App)
    └─→ Website 2 (React App)
```

Both websites depend on Directus for content and data management.
