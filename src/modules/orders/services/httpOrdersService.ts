import { handleHttpUtil, httpClientService } from '@/modules/core';
import type { OrderModel } from '../models/Order';
import type { CancelOrderRequestType } from '../types/CancelOrderRequestType';
import type { UpdateOrderStatusRequestType } from '../types/UpdateOrderStatusRequestType';
import type { OrdersServiceInterface } from './OrderServiceInterface';

class HttpOrdersService implements OrdersServiceInterface {
  async list(): Promise<OrderModel[]> {
    const response = await httpClientService.request<OrderModel[]>({
      url: '/orders',
    });

    const result = handleHttpUtil<OrderModel[]>(response);

    if (!result) {
      throw new Error('Orders not found');
    }

    return result;
  }

  async cancelOrder({ orderId }: CancelOrderRequestType): Promise<void> {
    const response = await httpClientService.request<void>({
      url: `/orders/${orderId}`,
      method: 'DELETE',
    });

    handleHttpUtil({ statusCode: response.statusCode });
  }

  async updateOrderStatus({
    orderId,
    status,
  }: UpdateOrderStatusRequestType): Promise<void> {
    const response = await httpClientService.request<void>({
      url: `/orders/${orderId}/status`,
      method: 'PATCH',
      body: {
        status,
      },
    });

    handleHttpUtil({ statusCode: response.statusCode });
  }
}

export const httpOrdersService = new HttpOrdersService();
