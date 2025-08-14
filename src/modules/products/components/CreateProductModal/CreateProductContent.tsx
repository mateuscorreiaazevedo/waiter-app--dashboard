import { useState } from 'react';
import { RowFilterCategories } from '@/modules/categories';
import { Button, FileInput, Input, Textarea } from '@/modules/core';

export function CreateProductContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectedCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <form className="mt-6 flex flex-1 flex-col justify-between">
      <article className="flex flex-1 flex-col gap-3">
        <Input label="Nome do produto" placeholder="Pizza quatro queijos" />
        <Textarea
          className="h-28 resize-none"
          label="Descrição"
          placeholder="Informe uma descrição para o seu novo produto"
        />
        <Input label="Preço (R$)" placeholder="R$ 10,00" />
        <FileInput label="Imagem do produto" />
        <RowFilterCategories
          onSelectedCategory={handleSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </article>
      <Button
        className="flex items-center justify-center"
        type="submit"
        variant={'primary'}
      >
        Salvar
      </Button>
    </form>
  );
}
