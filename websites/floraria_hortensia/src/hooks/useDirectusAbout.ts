import type {HortensiaAbout} from '@/lib/directus';

import {useDirectusItems} from './useDirectusItems';

/**
 * Custom hook specifically for fetching hortensia about cards
 * This is a convenience wrapper around useDirectusItems
 *
 * @example
 * ```tsx
 * const { data: aboutCards, loading, error } = useDirectusAbout();
 * ```
 */
export function useDirectusAbout() {
  return useDirectusItems<HortensiaAbout>('hortensia_about', {
    fields: ['*'],
    sort: ['id'],
  });
}
