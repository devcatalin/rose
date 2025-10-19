import {useEffect, useState} from 'react';

import type {GiocoDetails} from '@/data/directus';
import {directus} from '@/data/directus';
import {readSingleton} from '@directus/sdk';

interface UseDirectusDetailsResult {
  data: GiocoDetails | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch the gioco_details singleton from Directus
 * This singleton contains site-wide configuration like title, about, schedule, and phone number
 *
 * @example
 * ```tsx
 * const { data: details, loading, error } = useDirectusDetails();
 * if (details) {
 *   console.log(details.title);
 *   console.log(details.phone_number);
 * }
 * ```
 */
export function useDirectusDetails(): UseDirectusDetailsResult {
  const [data, setData] = useState<GiocoDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readSingleton('gioco_details', {
          fields: ['id', 'title', 'about', 'schedule', 'phone_number'],
        })
      );

      setData(result as GiocoDetails);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch gioco_details');
      setError(errorMessage);
      console.error('Error fetching gioco_details:', errorMessage);
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
