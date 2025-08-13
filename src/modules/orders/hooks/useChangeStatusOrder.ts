import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  messageStatusOrderConstant,
  TABLE_NUMBER,
} from '../constants/messageStatusOrder';
import type { OrderModel } from '../models/Order';
import { httpOrdersService } from '../services/httpOrdersService';
import type { UpdateOrderStatusRequestType } from '../types/UpdateOrderStatusRequestType';

export function useChangeStatusOrder() {
  const client = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ orderId, status }: UpdateOrderStatusRequestType) => {
      await httpOrdersService.updateOrderStatus({ orderId, status });
    },
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: (_data, { orderId, status }) => {
      const messageStatus = messageStatusOrderConstant[status];
      const orders = client.getQueryData<OrderModel[]>(['listOrders']);

      if (!orders) {
        return;
      }

      const orderIndex = orders?.findIndex(order => order._id === orderId);
      if (!orderIndex && orderIndex === -1) {
        return;
      }
      const newOrders = [...orders];
      const item = orders[orderIndex];

      toast.success(messageStatus?.replace(TABLE_NUMBER, item.table) || '', {
        icon: status === 'DONE' ? '✅' : '👨‍🍳',
      });

      newOrders[orderIndex] = {
        ...item,
        status,
      };

      client.setQueryData<OrderModel[]>(['listOrders'], newOrders);
    },
  });

  return {
    onChangeStatusOrder: mutateAsync,
    isChangeStatusOrderPending: isPending,
  };
}
