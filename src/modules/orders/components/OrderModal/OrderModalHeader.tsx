import { X } from 'lucide-react';

type Props = {
  orderTable: string;
  onClose: VoidFunction;
};

export function OrderModalHeader({ orderTable, onClose }: Props) {
  return (
    <header className="flex items-center justify-between">
      <h3 className="font-semibold text-lg text-text leading-h2">
        Mesa {orderTable.padStart(2, '0')}
      </h3>
      <button
        className="flex cursor-pointer items-center justify-center rounded-full p-1 transition-all hover:bg-gray-100"
        onClick={onClose}
        type="button"
      >
        <X className="size-4 text-text" />
      </button>
    </header>
  );
}
