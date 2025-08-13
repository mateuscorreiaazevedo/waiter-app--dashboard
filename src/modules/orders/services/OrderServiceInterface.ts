import type { OrderModel } from '../models/Order';
import type { CancelOrderRequestType } from '../types/CancelOrderRequestType';

export abstract class OrdersServiceInterface {
  abstract list(): Promise<OrderModel[]>;
  abstract cancelOrder(request: CancelOrderRequestType): Promise<void>;
}
