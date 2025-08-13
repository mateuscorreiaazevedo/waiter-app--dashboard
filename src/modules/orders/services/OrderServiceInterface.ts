import type { OrderModel } from '../models/Order';

export abstract class OrdersServiceInterface {
  abstract list(): Promise<OrderModel[]>;
}
