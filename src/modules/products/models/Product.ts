import type { IngredientModel } from './Ingredient';

export interface ProductModel {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  category: string;
  ingredients?: IngredientModel[];
}
