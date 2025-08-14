import clsx from 'clsx';
import { FileImage } from 'lucide-react';
import type { ComponentProps } from 'react';

interface FileInputProps extends ComponentProps<'input'> {
  label?: string;
}

export function FileInput({ className, label, ...props }: FileInputProps) {
  return (
    <label className="flex flex-col gap-1">
      {!!label && <span className="text-sm text-text">{label}</span>}
      {props.value && <div className="flex items-center gap-2">imagem</div>}

      {!props.value && (
        <div
          className={clsx(
            'flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-gray-300 border-dashed p-4 text-gray-300 transition-colors hover:border-gray-500 hover:text-gray-500',
            className
          )}
        >
          <FileImage className="size-6" />
          <span className="text-sm">Clique para selecionar uma imagem</span>
        </div>
      )}
      <input
        className="hidden"
        type="file"
        {...props}
        accept="image/png, image/jpeg"
      />
    </label>
  );
}
