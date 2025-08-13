import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useClickOutside } from '@/modules/core';
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
  const isModalOpen = useMemo(() => visible && order, [visible, order]);
  const contentRef = useRef<HTMLDivElement>(null);
  useClickOutside<HTMLDivElement>(contentRef, onClose);

  if (!(visible && order)) {
    return null;
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-xs"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            animate={{ opacity: 1, y: '0%' }}
            className="flex w-[480px] flex-col gap-6 rounded-2xl bg-white p-6"
            exit={{ opacity: 0, y: '-100%' }}
            initial={{ opacity: 0, y: '-100%' }}
            ref={contentRef}
            transition={{ duration: 0.4 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
