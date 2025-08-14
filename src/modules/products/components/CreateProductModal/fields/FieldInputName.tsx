import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@/modules/core';
import type { CreateProductSchemaType } from '@/modules/products/types/CreateProductSchemaType';

export function CreateProductFieldInputName() {
  const { control } = useFormContext<CreateProductSchemaType>();

  return (
    <Controller
      control={control}
      name="name"
      render={({ field }) => (
        <Input
          label="Nome do produto"
          placeholder="Pizza quatro queijos"
          {...field}
        />
      )}
    />
  );
}
