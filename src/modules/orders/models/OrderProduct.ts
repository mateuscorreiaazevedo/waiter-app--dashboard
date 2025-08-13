import type { ProductModel } from '@/modules/products';

export interface OrderProductModel {
  product: ProductModel;
  quantity: number;
}
