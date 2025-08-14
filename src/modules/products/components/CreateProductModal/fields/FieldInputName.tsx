import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@/modules/core';
import type { CreateProductSchemaType } from '@/modules/products/types/CreateProductSchemaType';

export function CreateProductFieldInputName() {
  const { control } = useFormContext<CreateProductSchemaType>();

  return (
    <Controller
      control={control}
      name="name"
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-0.5">
          <Input
            label="Nome do produto"
            placeholder="Pizza quatro queijos"
            {...field}
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
