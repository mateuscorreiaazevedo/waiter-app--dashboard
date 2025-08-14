import { Controller, useFormContext } from 'react-hook-form';
import { RowFilterCategories } from '@/modules/categories';
import type { CreateProductSchemaType } from '@/modules/products/types/CreateProductSchemaType';

export function CreateProductFieldSelectCategory() {
  const { control } = useFormContext<CreateProductSchemaType>();

  return (
    <Controller
      control={control}
      name="category"
      render={({ field }) => (
        <RowFilterCategories
          onSelectedCategory={field.onChange}
          selectedCategory={field.value}
        />
      )}
    />
  );
}
