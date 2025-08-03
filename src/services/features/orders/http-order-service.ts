import { AxiosHttpClientService } from '@/services/http';
import type { Order } from '@/types/features/orders';
import { httpHandlerHelper } from '@/util/helpers';

class HttpOrdersService extends AxiosHttpClientService {
  async getAll() {
    const response = await this.request<Order[]>({
      url: '/orders',
    });

    const result = httpHandlerHelper(response);

    return result;
  }
}

export const httpOrdersService = new HttpOrdersService();
