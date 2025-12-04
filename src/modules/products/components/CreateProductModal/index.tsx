import { Modal } from '@/modules/core';
import { CreateProductContent } from './CreateProductContent';
import { CreateProductModalHeader } from './CreateProductModalHeader';

interface CreateProductModalProps {
  visible: boolean;
  onClose: VoidFunction;
}

export function CreateProductModal({
  visible,
  onClose,
}: CreateProductModalProps) {
  return (
    <Modal
      className="flex w-[560px] flex-col rounded-l-2xl bg-gray-100 p-6"
      modalType="sheet"
      onClose={onClose}
      visible={visible}
    >
      <CreateProductModalHeader onClose={onClose} />
      <CreateProductContent onClose={onClose} />
    </Modal>
  );
}
