import { Controller, useFormContext } from 'react-hook-form';
import { RowFilterCategories } from '@/modules/categories';
import type { CreateProductSchemaType } from '@/modules/products/types/CreateProductSchemaType';

export function CreateProductFieldSelectCategory() {
  const { control } = useFormContext<CreateProductSchemaType>();

  return (
    <Controller
      control={control}
      name="category"
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-0.5">
          <span className="text-sm">Selecione uma categoria</span>
          <RowFilterCategories
            onSelectedCategory={field.onChange}
            selectedCategory={field.value}
          />
          {fieldState.error && (
            <span className="text-danger text-sm">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
