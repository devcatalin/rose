import {useEffect, useState} from 'react';

import type {HortensiaDetails} from '@/lib/directus';
import {directus} from '@/lib/directus';
import {readSingleton} from '@directus/sdk';

interface UseDirectusDetailsResult {
  data: HortensiaDetails | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch the hortensia_details singleton from Directus
 * This singleton contains site-wide configuration like phone numbers, schedule, and hero slideshow
 *
 * @example
 * ```tsx
 * const { data: details, loading, error } = useDirectusDetails();
 * if (details) {
 *   console.log(details.primary_phone_number);
 * }
 * ```
 */
export function useDirectusDetails(): UseDirectusDetailsResult {
  const [data, setData] = useState<HortensiaDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readSingleton('hortensia_details', {
          fields: [
            'id',
            'primary_phone_number',
            'secondary_phone_number',
            'schedule',
            'short_about',
            {
              slideshow: [
                {
                  hortensia_gallery_id: ['id', 'description', 'image'],
                },
              ],
            },
          ],
        })
      );

      setData(result as HortensiaDetails);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch hortensia_details');
      setError(errorMessage);
      console.error('Error fetching hortensia_details:', errorMessage);
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
