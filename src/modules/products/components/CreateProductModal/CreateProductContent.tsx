import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, CurrencyHelper, FileInput } from "@/modules/core";
import { useCreateProduct } from "../../hooks/useCreateProduct";
import type { CreateProductSchemaType } from "../../types/CreateProductSchemaType";
import { createProductSchema } from "../../util/createProductSchema";
import { CreateProductFieldInputName } from "./fields/FieldInputName";
import { CreateProductFieldInputPrice } from "./fields/FieldInputPrice";
import { CreateProductFieldSelectCategory } from "./fields/FieldSelectCategory";
import { CreateProductFieldTextareaDescription } from "./fields/FieldTextareaDescription";

interface CreateProductContentProps {
  onClose?: VoidFunction;
}

export function CreateProductContent({ onClose }: CreateProductContentProps) {
  const form = useForm<CreateProductSchemaType>({
    resolver: zodResolver(createProductSchema),
  });
  const { isCreatingProduct, onCreateProduct } = useCreateProduct();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = form.handleSubmit((data) => {
    onCreateProduct(
      {
        ...data,
        price: CurrencyHelper.parseBRLToNumber(data.price),
      },
      {
        onError(err) {
          setError(err.message);
        },
        onSuccess() {
          toast.success("Produto cadastrado com sucesso!");
          form.reset();
          onClose?.();
        },
      }
    );
  });

  return (
    <FormProvider {...form}>
      <form
        className="mt-6 flex flex-1 flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <article className="flex max-h-[calc(100vh-172px)] flex-col gap-3 overflow-y-auto px-2 pb-8">
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <CreateProductFieldInputName />
          <CreateProductFieldTextareaDescription />
          <CreateProductFieldInputPrice />
          <FileInput label="Imagem do produto" />
          <CreateProductFieldSelectCategory />
        </article>
        <Button
          className="flex items-center justify-center"
          disabled={isCreatingProduct}
          type="submit"
          variant={"primary"}
        >
          {isCreatingProduct ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </FormProvider>
  );
}
