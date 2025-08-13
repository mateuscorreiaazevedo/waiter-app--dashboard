import type { OrderModel } from '../models/Order';
import type { CancelOrderRequestType } from '../types/CancelOrderRequestType';
import type { UpdateOrderStatusRequestType } from '../types/UpdateOrderStatusRequestType';

export abstract class OrdersServiceInterface {
  abstract list(): Promise<OrderModel[]>;
  abstract cancelOrder(request: CancelOrderRequestType): Promise<void>;
  abstract updateOrderStatus(
    request: UpdateOrderStatusRequestType
  ): Promise<void>;
}
