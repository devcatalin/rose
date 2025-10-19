import type {HortensiaSection} from '@/lib/directus';

import {useDirectusItems} from './useDirectusItems';

/**
 * Custom hook specifically for fetching hortensia sections with all related data
 * This is a convenience wrapper around useDirectusItems
 *
 * @example
 * ```tsx
 * const { data: sections, loading, error } = useDirectusSections();
 * ```
 */
export function useDirectusSections() {
  return useDirectusItems<HortensiaSection>('hortensia_sections', {
    fields: [
      '*', // Get all base fields
      'image.*', // Get all image fields
      'gallery.hortensia_gallery_id.*', // Get all gallery item fields
      'gallery.hortensia_gallery_id.image.*', // Get all gallery image fields
    ],
    sort: ['sort', 'id'], // Sort by the sort field first, then by id as fallback
  });
}
