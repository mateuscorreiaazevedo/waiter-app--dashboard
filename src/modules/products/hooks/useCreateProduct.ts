import { useMutation } from '@tanstack/react-query';
import { httpProductsService } from '../services/httpProductsService';
import type { CreateProductRequestDto } from '../types/CreateProductRequestDto';

export function useCreateProduct() {
  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateProductRequestDto) => {
      return httpProductsService.createProduct(data);
    },
  });

  return {
    onCreateProduct: mutate,
    isCreatingProduct: isPending,
  };
}
