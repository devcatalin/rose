# Data Folder

This folder contains all constant data for the Florăria Hortensia application, extracted from `App.tsx` for better
organization and maintainability.

## Files

### `types.ts`

TypeScript type definitions for the application data:

- `SlideshowImage`: Interface for slideshow gallery images
- `BulletPoint`: Interface for feature bullet points
- `ContentImage`: Interface for content section images
- `ContentNote`: Interface for special notes in content sections
- `ContentSection`: Complete interface for content sections with all properties
- `SlideshowDataKey`: Union type for slideshow section keys
- `SlideshowData`: Record mapping section keys to image arrays

### `slideshowData.ts`

Slideshow gallery images for each section:

- **despre** (3 images): Shop interior, florist workspace, fresh flowers
- **buchete** (10 images): Various bouquet styles and arrangements
- **aranjamente** (4 images): Floral arrangements in boxes and baskets
- **mireasa** (8 images): Bridal bouquets collection
- **evenimente** (3 images): Event arrangements (baptism, table centerpieces)
- **funerare** (1 image): Funeral arrangements
- **ingrijire-plante** (3 images): Plant care tips and images

Total: 32 slideshow images

### `contentSections.ts`

Main content sections displayed on the website:

1. **Despre** - About Florăria Hortensia
2. **Buchete** - Personalized Bouquets
3. **Aranjamente** - Floral Arrangements
4. **Mireasa** - Bridal Bouquets
5. **Evenimente** - Event Arrangements
6. **Funerare** - Funeral Arrangements
7. **Ingrijire-plante** - Plant Care Tips

Each section includes:

- Title and description
- Main display image
- Bullet points with features
- Button configuration
- Layout settings (image position, background)

Total: 7 content sections

### `index.ts`

Central export file that re-exports all data and types for convenient importing:

```typescript
import {contentSections, slideshowData} from './data';
import type {ContentSection, SlideshowImage} from './data';
```

## Usage

Import data in your components:

```typescript
import {contentSections, slideshowData} from './data';
import type {ContentSection, SlideshowDataKey} from './data';
```

## Type Safety

All data structures are properly typed with TypeScript interfaces, ensuring:

- Compile-time type checking
- Better IDE autocomplete
- Easier refactoring
- Documentation through types
- Type-safe slideshow key access

## Asset Management

Images are imported from two sources:

1. **Local assets** (`@/assets/*.png`): Product photos and arrangements
2. **Unsplash URLs**: Generic stock photos for backgrounds and examples

All local assets are properly typed and bundled with the application.
