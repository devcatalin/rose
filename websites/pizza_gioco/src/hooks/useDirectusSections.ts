import {useEffect, useState} from 'react';

import type {GiocoSection} from '@/data/directus';
import {directus} from '@/data/directus';
import {readItems} from '@directus/sdk';

interface UseDirectusSectionsResult {
  data: GiocoSection[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch gioco sections from Directus
 * Returns GiocoSection objects sorted by sort field
 *
 * @example
 * ```tsx
 * const { data: sections, loading, error } = useDirectusSections();
 * ```
 */
export function useDirectusSections(): UseDirectusSectionsResult {
  const [data, setData] = useState<GiocoSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readItems('gioco_sections', {
          fields: ['*', 'image.*'],
          sort: ['sort', 'id'],
        })
      );

      setData(result as GiocoSection[]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch sections');
      setError(errorMessage);
      console.error('Error fetching sections:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
