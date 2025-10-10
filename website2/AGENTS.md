# Agent Instructions for Website 2

## Purpose

This is a React application that serves as the second frontend website in the Rose monorepo.

## Current State

- **Framework**: React
- **Status**: Application is already built and ready to be added to this monorepo
- **Backend**: Consumes data from Directus CMS

## Important Considerations

### When Working on Website 2

1. **React Application**: This is a standard React app
2. **Directus Integration**: The app fetches data from Directus collections
3. **Deployment Config**: Deployment configuration needs to be set up
4. **Environment Variables**: Required API URLs and keys should be documented

### File Organization

```
website2/
├── src/              # Source code
├── public/           # Public assets
├── package.json      # Dependencies
└── [other React app files]
```

### Dependencies

- **Directus API**: This app depends on the Directus instance for data
- **Collections**: Document which Directus collections this app uses
- **API Endpoints**: Keep track of all API endpoints being consumed

## Best Practices

1. **API Calls**: Centralize API calls in a services layer
2. **Environment Variables**: Use environment variables for all configuration
3. **Error Handling**: Implement proper error handling for API failures
4. **Loading States**: Handle loading and empty states gracefully

## Development Workflow

1. Ensure Directus is running and accessible
2. Configure environment variables with Directus URL
3. Run the development server
4. Test API integrations thoroughly

## Deployment

- Deployment strategy to be documented
- Build process should be automated
- Environment-specific configurations should be clearly separated

## Testing

- Test API integrations with actual Directus instance
- Verify data fetching and error scenarios
- Check responsive design and cross-browser compatibility

## Resources

Refer to:
- Main `/AGENTS.md` for general guidelines
- `/directus/AGENTS.md` for backend API information
