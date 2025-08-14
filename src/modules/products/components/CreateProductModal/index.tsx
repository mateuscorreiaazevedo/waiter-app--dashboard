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
      className="flex min-w-1/4 flex-col rounded-l-2xl bg-white p-6"
      modalType="sheet"
      onClose={onClose}
      visible={visible}
    >
      <CreateProductModalHeader onClose={onClose} />
      <CreateProductContent />
    </Modal>
  );
}
