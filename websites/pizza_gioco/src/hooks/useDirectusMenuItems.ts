import {useEffect, useState} from 'react';

import type {GiocoMenuItem} from '@/data/directus';
import {directus} from '@/data/directus';
import {transformDirectusMenuItems} from '@/data/transformers';
import type {MenuItem} from '@/data/types';
import {readItems} from '@directus/sdk';

interface UseDirectusMenuItemsResult {
  data: MenuItem[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch menu items from Directus
 * Returns transformed MenuItem objects grouped by category
 *
 * @example
 * ```tsx
 * const { data: menuItems, loading, error } = useDirectusMenuItems();
 * const pizzas = menuItems.filter(item => item.categoryName === 'Pizza');
 * ```
 */
export function useDirectusMenuItems(): UseDirectusMenuItemsResult {
  const [data, setData] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await directus.request(
        readItems('gioco_menu_items', {
          fields: [
            'id',
            'title',
            'description',
            'image',
            'price',
            'price_small',
            {
              category: ['id', 'category', 'sort'],
            },
          ],
        })
      );

      const transformed = transformDirectusMenuItems(result as GiocoMenuItem[]);
      setData(transformed);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch menu items');
      setError(errorMessage);
      console.error('Error fetching menu items:', errorMessage);
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
