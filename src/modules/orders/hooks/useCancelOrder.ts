import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import type { OrderModel } from '../models/Order';
import { httpOrdersService } from '../services/httpOrdersService';
import type { CancelOrderRequestType } from '../types/CancelOrderRequestType';

export function useCancelOrder() {
  const client = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['cancelOrderMutation'],
    mutationFn: async ({ orderId }: CancelOrderRequestType) => {
      await httpOrdersService.cancelOrder({ orderId });
    },
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: (_data, { orderId }) => {
      const orders = client.getQueryData<OrderModel[]>(['listOrders']);

      if (!orders) {
        return;
      }

      const orderIndex = orders?.findIndex(order => order._id === orderId);

      if (!orderIndex && orderIndex === -1) {
        return;
      }
      const newOrders = [...orders];
      newOrders.splice(orderIndex, 1);

      client.setQueryData<OrderModel[]>(['listOrders'], newOrders);
    },
  });

  return {
    onCancelOrder: mutateAsync,
    isCancelOrderPending: isPending,
  };
}
