import type { IHttpClientService } from '@/services/http';
import type { Order } from '@/types/features/orders';
import { httpHandlerHelper } from '@/util/helpers';

export class HttpOrdersService {
  private readonly service: IHttpClientService;

  constructor(service: IHttpClientService) {
    this.service = service;
  }

  async getAll() {
    const response = await this.service.request<Order[]>({
      url: '/orders',
    });

    const result = httpHandlerHelper(response);

    return result;
  }
}
