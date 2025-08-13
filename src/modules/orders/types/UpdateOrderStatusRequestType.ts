import type { OrderStatusType } from './OrderStatusType';

export type UpdateOrderStatusRequestType = {
  orderId: string;
  status: OrderStatusType;
};
