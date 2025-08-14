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

  const handleSubmit = form.handleSubmit(data => {
    // biome-ignore lint/suspicious/noConsole: for test submit handler
    console.log(data);
  });

  return (
    <FormProvider {...form}>
      <form
        className="mt-6 flex flex-1 flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <article className="flex max-h-[calc(100vh-172px)] flex-col gap-3 overflow-y-auto pb-8">
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
