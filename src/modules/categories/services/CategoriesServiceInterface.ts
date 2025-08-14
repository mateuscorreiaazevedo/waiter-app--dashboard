import type { CategoryModel } from '../models/Category';

export abstract class CategoriesServiceInterface {
  abstract list(): Promise<CategoryModel[]>;
}
