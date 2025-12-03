import clsx from 'clsx';
import { FileImage, X } from 'lucide-react';
import type { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface FileInputProps extends ComponentProps<'input'> {
  label?: string;
}

export function FileInput({ className, label, ...props }: FileInputProps) {
  const { control } = useFormContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFormFile: (...event: unknown[]) => void
  ) => {
    props.onChange?.(e);
    const files = e.target.files;
    const file = files ? files[0] : undefined;

    if (file) {
      setFormFile(file);
    }
  };
  return (
    <Controller
      control={control}
      name={props.name ?? 'image'}
      render={({ field, fieldState }) => (
        <>
          {field.value && (
            <div className="relative mb-2 flex items-center justify-center rounded-2xl bg-gray-200 p-4">
              <img
                alt="Imagem do Produto"
                className="aspect-auto max-h-80 rounded-2xl object-contain"
                src={URL.createObjectURL(field.value)}
              />
              <button
                aria-label="Remover imagem"
                className="absolute top-2 right-2 cursor-pointer rounded-full bg-white p-1 text-gray-500 hover:text-gray-700"
                onClick={() => field.onChange(undefined)}
                type="button"
              >
                <X className="size-4" />
                <span className="sr-only">Remover imagem</span>
              </button>
            </div>
          )}

          <label className="flex flex-col gap-1">
            {!!label && <span className="text-sm text-text">{label}</span>}

            {!field.value && (
              <div
                className={clsx(
                  'flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-gray-300 border-dashed p-4 text-gray-300 transition-colors hover:border-gray-500 hover:text-gray-500',
                  className
                )}
              >
                <FileImage className="size-6" />
                <span className="text-sm">
                  Clique para selecionar uma imagem
                </span>
              </div>
            )}

            <input
              className="hidden"
              type="file"
              {...props}
              accept="image/png, image/jpeg"
              onChange={e => handleChange(e, field.onChange)}
            />
            {fieldState.error?.message && (
              <span className="text-danger text-sm">
                {fieldState.error.message}
              </span>
            )}
          </label>
        </>
      )}
    />
  );
}
