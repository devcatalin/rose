import {useEffect, useState} from 'react';

import {type DirectusSchema, directus} from '@/lib/directus';
import {readItems} from '@directus/sdk';

interface UseDirectusItemsOptions {
  fields?: string[];
  filter?: Record<string, any>;
  sort?: string[];
  limit?: number;
  offset?: number;
}

interface UseDirectusItemsResult<T> {
  data: T[] | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch items from a Directus collection
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useDirectusItems<HortensiaSection>('hortensia_sections', {
 *   fields: ['id', 'title'],
 *   sort: ['title'],
 *   limit: 10
 * });
 * ```
 */
export function useDirectusItems<T = any>(
  collection: keyof DirectusSchema,
  options: UseDirectusItemsOptions = {}
): UseDirectusItemsResult<T> {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Build query options, only including defined values
      const queryOptions: any = {
        fields: options.fields || ['*'],
        limit: options.limit ?? -1, // -1 means get all items
      };

      // Only add optional parameters if they're defined
      if (options.filter) {
        queryOptions.filter = options.filter;
      }
      if (options.sort) {
        queryOptions.sort = options.sort;
      }
      if (options.offset !== undefined) {
        queryOptions.offset = options.offset;
      }

      const result = await directus.request(readItems(collection as any, queryOptions));

      setData(result as T[]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch data');
      setError(errorMessage);
      console.error(`Error fetching ${collection}:`, err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [collection, JSON.stringify(options)]);

  return {data, loading, error, refetch: fetchData};
}
