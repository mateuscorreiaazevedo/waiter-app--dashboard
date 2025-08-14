import type { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CurrencyHelper, Input } from '@/modules/core';
import type { CreateProductSchemaType } from '@/modules/products/types/CreateProductSchemaType';

export function CreateProductFieldInputPrice() {
  const { control } = useFormContext<CreateProductSchemaType>();

  function formatCurrency(
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) {
    const { value } = e.currentTarget;
    const formattedValue = CurrencyHelper.maskCurrencyBRL(value);
    e.currentTarget.value = formattedValue;

    onChange(formattedValue);
  }

  return (
    <Controller
      control={control}
      name="price"
      render={({ field: { onChange, ...field }, fieldState }) => (
        <div className="flex flex-col gap-0.5">
          <Input
            label="Preço (R$)"
            onChange={e => formatCurrency(e, onChange)}
            placeholder="R$ 10,00"
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
