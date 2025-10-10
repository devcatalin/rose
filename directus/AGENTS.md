# Agent Instructions for Directus

## Purpose

This directory contains the Directus CMS instance for the Rose project. Directus provides the backend API and content management for both React websites.

## Current State

- **Status**: Configuration and deployment setup in progress
- **Learning Phase**: The team is still learning how to deploy Directus
- Deployment configuration is being developed

## Important Considerations

### When Working on Directus

1. **Deployment is TBD**: The deployment strategy is still being finalized
2. **Collections**: Any collections created here will be consumed by website1 and website2
3. **Schema Changes**: Be mindful that schema changes affect both websites
4. **Environment Variables**: Document all required environment variables clearly

### File Organization

- Configuration files should be well-documented
- Environment-specific configs should be clearly separated
- Deployment scripts should include comments explaining each step

### Dependencies

- Both React websites (website1 and website2) depend on this Directus instance
- Changes to collections or APIs may require corresponding changes in the websites

## Best Practices

1. **Documentation**: Document all collections, fields, and relationships
2. **Environment Variables**: Never commit sensitive data; use `.env.example` files
3. **Migrations**: Document any schema changes or migration steps
4. **API Changes**: Communicate API changes that affect the frontend applications

## Testing

- Test API endpoints before deploying
- Verify collection permissions and access controls
- Ensure CORS settings allow requests from both websites

## Resources

Refer to the main `/AGENTS.md` for general monorepo guidelines.
