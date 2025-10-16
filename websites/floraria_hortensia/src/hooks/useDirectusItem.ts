import {useEffect, useState} from 'react';

import {type DirectusSchema, directus} from '@/lib/directus';
import {readItem} from '@directus/sdk';

interface UseDirectusItemOptions {
  fields?: string[];
}

interface UseDirectusItemResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch a single item from a Directus collection
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useDirectusItem<HortensiaSection>('hortensia_sections', 'section-id', {
 *   fields: ['id', 'title', 'description']
 * });
 * ```
 */
export function useDirectusItem<T = any>(
  collection: keyof DirectusSchema,
  id: string | number,
  options: UseDirectusItemOptions = {}
): UseDirectusItemResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readItem(collection as any, id, {
          fields: options.fields || ['*'],
        })
      );

      setData(result as T);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch item');
      setError(errorMessage);
      console.error(`Error fetching ${collection} item ${id}:`, err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [collection, id, JSON.stringify(options)]);

  return {data, loading, error, refetch: fetchData};
}
