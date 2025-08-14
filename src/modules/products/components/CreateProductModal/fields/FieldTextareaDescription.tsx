import { Controller, useFormContext } from 'react-hook-form';
import { Textarea } from '@/modules/core';
import type { CreateProductSchemaType } from '@/modules/products/types/CreateProductSchemaType';

export function CreateProductFieldTextareaDescription() {
  const { control } = useFormContext<CreateProductSchemaType>();

  return (
    <Controller
      control={control}
      name="description"
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-0.5">
          <Textarea
            className="h-28 resize-none"
            label="Descrição"
            placeholder="Informe uma descrição para o seu novo produto"
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
