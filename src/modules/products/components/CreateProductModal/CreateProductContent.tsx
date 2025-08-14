import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, FileInput } from '@/modules/core';
import type { CreateProductSchemaType } from '../../types/CreateProductSchemaType';
import { createProductSchema } from '../../util/createProductSchema';
import { CreateProductFieldInputName } from './fields/FieldInputName';
import { CreateProductFieldInputPrice } from './fields/FieldInputPrice';
import { CreateProductFieldSelectCategory } from './fields/FieldSelectCategory';
import { CreateProductFieldTextareaDescription } from './fields/FieldTextAreaDescription';

export function CreateProductContent() {
  const form = useForm<CreateProductSchemaType>({
    resolver: zodResolver(createProductSchema),
  });

  return (
    <FormProvider {...form}>
      <form className="mt-6 flex flex-1 flex-col justify-between">
        <article className="flex flex-1 flex-col gap-3">
          <CreateProductFieldInputName />
          <CreateProductFieldTextareaDescription />
          <CreateProductFieldInputPrice />
          <FileInput label="Imagem do produto" />
          <CreateProductFieldSelectCategory />
        </article>
        <Button
          className="flex items-center justify-center"
          type="submit"
          variant={'primary'}
        >
          Salvar
        </Button>
      </form>
    </FormProvider>
  );
}
