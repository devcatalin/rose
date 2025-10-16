import type {HortensiaSection} from '@/lib/directus';

import {useDirectusItems} from './useDirectusItems';

/**
 * Custom hook specifically for fetching hortensia sections
 * This is a convenience wrapper around useDirectusItems
 *
 * @example
 * ```tsx
 * const { data: sections, loading, error } = useDirectusSections();
 * ```
 */
export function useDirectusSections() {
  return useDirectusItems<HortensiaSection>('hortensia_sections', {
    fields: ['id', 'title'],
    sort: ['title'],
  });
}
