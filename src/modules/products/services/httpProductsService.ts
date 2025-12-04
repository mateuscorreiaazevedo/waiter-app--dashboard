import {
  FormDataHelper,
  handleHttpUtil,
  httpClientService,
} from '@/modules/core';
import type { ProductModel } from '../models/Product';
import type { CreateProductRequestDto } from '../types/CreateProductRequestDto';
import type { ProductsServiceInterface } from './ProductsServiceInterface';

class HttpProductsService implements ProductsServiceInterface {
  async createProduct(data: CreateProductRequestDto): Promise<ProductModel> {
    const body = FormDataHelper.toFormData<CreateProductRequestDto>(data);

    const response = await httpClientService.request<ProductModel, FormData>({
      method: 'POST',
      url: '/products',
      body,
    });

    const result = handleHttpUtil<ProductModel>(response);

    if (!result) {
      throw new Error('Failed to create product.');
    }

    return result;
  }
}

export const httpProductsService = new HttpProductsService();
