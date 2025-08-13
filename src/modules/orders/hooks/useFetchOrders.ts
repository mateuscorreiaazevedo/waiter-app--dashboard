import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { httpOrdersService } from '../services/httpOrdersService';

export function useFetchOrders() {
  const { data, isLoading, isFetching, isFetched } = useQuery({
    queryKey: ['listOrders'],
    queryFn: async () => {
      const response = await httpOrdersService.list();

      return response;
    },
    throwOnError(error) {
      toast.error(error.message);

      return false;
    },
  });

  return {
    orders: data,
    loadingOrders: isLoading || isFetching,
    isOrdersFetched: isFetched,
  };
}
