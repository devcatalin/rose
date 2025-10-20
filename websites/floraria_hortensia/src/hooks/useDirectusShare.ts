import {useEffect, useState} from 'react';

import type {HortensiaShare} from '@/data/directus';
import {directus} from '@/data/directus';
import {readSingleton} from '@directus/sdk';

interface UseDirectusShareResult {
  data: HortensiaShare | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch the hortensia_share singleton from Directus
 * This singleton contains SEO/sharing metadata: title, description, and image
 *
 * @example
 * ```tsx
 * const { data: shareData, loading, error } = useDirectusShare();
 * if (shareData) {
 *   console.log(shareData.share_title);
 *   console.log(shareData.share_description);
 * }
 * ```
 */
export function useDirectusShare(): UseDirectusShareResult {
  const [data, setData] = useState<HortensiaShare | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readSingleton('hortensia_share', {
          fields: ['id', 'share_title', 'share_description', 'share_image'],
        })
      );

      setData(result as HortensiaShare);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch hortensia_share');
      setError(errorMessage);
      console.error('Error fetching hortensia_share:', errorMessage);
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
