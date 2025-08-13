import type { OrderStatusType } from '../types/OrderStatusType';
import type { OrderProductModel } from './OrderProduct';

export interface OrderModel {
  _id: string;
  table: string;
  status: OrderStatusType;
  products: OrderProductModel[];
  createdAt: string;
}
