import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { socketClientService } from '@/modules/core';
import type { OrderModel } from '../models/Order';
import { httpOrdersService } from '../services/httpOrdersService';

export function useFetchOrders() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleNewOrder = (...args: unknown[]) => {
      const [order] = args as OrderModel[];

      queryClient.setQueryData<OrderModel[]>(['listOrders'], orders => {
        return orders?.concat(order);
      });
    };

    socketClientService.on('createNewOrder', handleNewOrder);

    return () => {
      socketClientService.off('createNewOrder', handleNewOrder);
    };
  }, []);

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
