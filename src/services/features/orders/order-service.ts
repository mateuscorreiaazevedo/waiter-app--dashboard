import { AxiosHttpClientService } from '@/services/http';
import { HttpOrdersService } from './http-orders-service';

const axiosService = new AxiosHttpClientService();

export const orderService = {
  http: new HttpOrdersService(axiosService),
};
