import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useClickOutside } from '@/hooks/shared';
import type { Order } from '@/types/features/orders';
import { OrderModalFooter } from './order-modal-footer';
import { OrderModalHeader } from './order-modal-header';
import { OrderModalItems } from './order-modal-items';
import { OrderModalStatus } from './order-modal-status';

type OrderModalProps = {
  visible: boolean;
  onClose: () => void;
  order: Order | null;
};

export function OrderModal({ visible, onClose, order }: OrderModalProps) {
  const isModalOpen = useMemo(() => visible && order, [visible, order]);
  const contentRef = useRef<HTMLDivElement>(null);
  useClickOutside<HTMLDivElement>(contentRef, onClose);

  function handleActionModal() {
    switch (order?.status) {
      case 'WAITING':
        alert('Aguardando produção');
        break;
      case 'IN_PRODUCTION':
        alert('Em produção');
        break;
      case 'DONE':
        alert('Pronto');
        break;
      default:
        break;
    }
  }

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
              onConfirm={handleActionModal}
              status={order.status}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
