import type { Product } from '../products';

export type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export type OrderProductRef = {
  _id: string;
  quantity: number;
  product: Pick<Product, '_id' | 'name' | 'imagePath' | 'price'>;
};

export interface Order {
  _id: string;
  table: string;
  status: OrderStatus;
  products: OrderProductRef[];
  createdAt: string;
}
