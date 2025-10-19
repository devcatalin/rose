import {useEffect, useState} from 'react';

import {directus} from '@/data/directus';
import type {MenuCategory} from '@/data/types';
import {readItems} from '@directus/sdk';

interface UseDirectusCategoriesResult {
  data: MenuCategory[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch menu categories from Directus
 * Returns MenuCategory objects sorted by sort field
 *
 * @example
 * ```tsx
 * const { data: categories, loading, error } = useDirectusCategories();
 * ```
 */
export function useDirectusCategories(): UseDirectusCategoriesResult {
  const [data, setData] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readItems('gioco_menu_categories', {
          fields: ['id', 'category', 'sort'],
          sort: ['sort'],
        })
      );

      setData(result as MenuCategory[]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch categories');
      setError(errorMessage);
      console.error('Error fetching categories:', errorMessage);
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
