import { handleHttpUtil, httpClientService } from '@/modules/core';
import type { CategoryModel } from '../models/Category';
import type { CategoriesServiceInterface } from './CategoriesServiceInterface';

class HttpCategoriesService implements CategoriesServiceInterface {
  async list(): Promise<CategoryModel[]> {
    const response = await httpClientService.request<CategoryModel[]>({
      url: '/categories',
    });

    const result = handleHttpUtil<CategoryModel[]>(response);

    return result!;
  }
}

export const httpCategoriesService = new HttpCategoriesService();
