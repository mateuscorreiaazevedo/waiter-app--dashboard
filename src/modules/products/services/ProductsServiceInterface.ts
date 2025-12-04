import type { ProductModel } from '../models/Product';
import type { CreateProductRequestDto } from '../types/CreateProductRequestDto';

export abstract class ProductsServiceInterface {
  abstract createProduct(data: CreateProductRequestDto): Promise<ProductModel>;
}
