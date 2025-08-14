import { X } from 'lucide-react';

type Props = {
  onClose: VoidFunction;
};

export function CreateProductModalHeader({ onClose }: Props) {
  return (
    <header className="flex items-center justify-between">
      <button
        className="flex cursor-pointer items-center justify-center rounded-full p-1 transition-all hover:bg-gray-100"
        onClick={onClose}
        type="button"
      >
        <X className="size-4 text-text" />
      </button>
      <h3 className="flex-1 text-center font-semibold text-text text-xl leading-h2">
        Adicionar um novo produto
      </h3>
    </header>
  );
}
