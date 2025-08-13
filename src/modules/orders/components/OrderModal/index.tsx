import { useMemo } from 'react';
import { Modal } from '@/modules/core';
import type { OrderModel } from '../../models/Order';
import { OrderModalFooter } from './OrderModalFooter';
import { OrderModalHeader } from './OrderModalHeader';
import { OrderModalItems } from './OrderModalItems';
import { OrderModalStatus } from './OrderModalStatus';

type OrderModalProps = {
  visible: boolean;
  onClose: () => void;
  order: OrderModel | null;
};

export function OrderModal({ visible, onClose, order }: OrderModalProps) {
  const isModalOpen = useMemo(
    () => Boolean(visible && order),
    [visible, order]
  );

  if (!(visible && order)) {
    return null;
  }

  return (
    <Modal
      className="flex w-[480px] flex-col gap-6 rounded-2xl bg-white p-6"
      onClose={onClose}
      visible={isModalOpen}
    >
      <OrderModalHeader onClose={onClose} orderTable={order.table} />

      <article className="space-y-6">
        <OrderModalStatus status={order.status} />
        <OrderModalItems products={order.products} />
      </article>
      <OrderModalFooter
        onClose={onClose}
        orderId={order._id}
        status={order.status}
      />
    </Modal>
  );
}
