export interface CreateProductRequestDto {
  name: string;
  description: string;
  price: number;
  category: string;
  image: File;
}
