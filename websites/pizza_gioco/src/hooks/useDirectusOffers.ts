import {useEffect, useState} from 'react';

import type {GiocoOffer} from '@/data/directus';
import {directus} from '@/data/directus';
import {transformDirectusOffers} from '@/data/transformers';
import type {Promotion} from '@/data/types';
import {readItems} from '@directus/sdk';

interface UseDirectusOffersResult {
  data: Promotion[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch offers/promotions from Directus
 * Returns transformed Promotion objects
 *
 * @example
 * ```tsx
 * const { data: offers, loading, error } = useDirectusOffers();
 * ```
 */
export function useDirectusOffers(): UseDirectusOffersResult {
  const [data, setData] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readItems('gioco_offers', {
          fields: ['id', 'title', 'subtitle', 'sort'],
          sort: ['sort'],
        })
      );

      const transformed = transformDirectusOffers(result as GiocoOffer[]);
      setData(transformed);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch offers');
      setError(errorMessage);
      console.error('Error fetching offers:', errorMessage);
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
