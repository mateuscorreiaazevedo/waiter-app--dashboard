import { handleHttpUtil, httpClientService } from '@/modules/core';
import type { OrderModel } from '../models/Order';
import type { OrdersServiceInterface } from './OrderServiceInterface';

class HttpOrdersService implements OrdersServiceInterface {
  async list(): Promise<OrderModel[]> {
    const response = await httpClientService.request<OrderModel[]>({
      url: '/orders',
    });

    const result = handleHttpUtil(response);

    return result;
  }
}

export const httpOrdersService = new HttpOrdersService();
