import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import type { CategoryModel } from '../models/Category';
import { httpCategoriesService } from '../services/httpCategoriesService';

export function useFetchCategories() {
  const { data, isLoading, isFetched } = useQuery<CategoryModel[]>({
    queryKey: ['listCategories'],
    queryFn: async () => {
      const categories = await httpCategoriesService.list();

      return categories;
    },
    staleTime: Number.POSITIVE_INFINITY,
    throwOnError(error) {
      toast.error(error.message);

      return false;
    },
  });

  return {
    categories: data,
    isLoading,
    isFetched,
  };
}
