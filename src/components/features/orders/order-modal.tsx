import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '@/components/ui';
import type { Order, OrderStatus } from '@/types/features/orders';
import { CurrencyHelper } from '@/util/helpers';

type OrderModalProps = {
  visible: boolean;
  onClose: () => void;
  order: Order | null;
};

export function OrderModal({ visible, onClose, order }: OrderModalProps) {
  const isModalOpen = useMemo(() => visible && order, [visible, order]);
  const totalPrice = useMemo(() => {
    return (
      order?.products.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0) || 0
    );
  }, [order]);

  const orderTable = '1';

  const iconByOrderStatus: Record<OrderStatus, string> = {
    WAITING: '🕒',
    IN_PRODUCTION: '👩‍🍳',
    DONE: '✅',
  };

  const statusLabelByOrderStatus: Record<OrderStatus, string> = {
    WAITING: 'Fila de espera',
    IN_PRODUCTION: 'Em produção',
    DONE: 'Pronto',
  };

  const buttonLabelByOrderStatus: Partial<Record<OrderStatus, string>> = {
    WAITING: 'Iniciar produção',
    IN_PRODUCTION: 'Concluir pedido',
  };

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
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <header className="flex items-center justify-between">
              <h3 className="font-semibold text-h4 text-text leading-h2">
                Mesa {orderTable}
              </h3>
              <button
                className="flex cursor-pointer items-center justify-center rounded-full p-1 transition-all hover:bg-gray-100"
                onClick={onClose}
                type="button"
              >
                <X className="size-4 text-text" />
              </button>
            </header>
            {/* Content */}
            <article className="space-y-6">
              {/* Status */}
              <section className="flex flex-col gap-2">
                <span className="font-medium text-body-small text-gray-500">
                  Status do pedido
                </span>
                <div className="flex items-center gap-2">
                  <span>{iconByOrderStatus[order.status]}</span>
                  <strong className="font-semibold text-body-medium">
                    {statusLabelByOrderStatus[order.status]}
                  </strong>
                </div>
              </section>
              {/* Items */}
              <section className="flex flex-col gap-4">
                <span className="font-medium text-body-small text-gray-500">
                  Itens
                </span>
                <ul className="flex flex-col gap-4">
                  {order.products.map(item => (
                    <li
                      className="flex items-center gap-3"
                      key={item.product._id}
                    >
                      <div className="flex h-12 w-10 items-center justify-center rounded-md bg-gray-100">
                        <img
                          alt={item.product.name}
                          className="h-12 w-10 flex-1 rounded-md object-cover"
                          loading="lazy"
                          // TODO: Change src to API's BASE_URL + item.product.imagePath
                          src={item.product.imagePath}
                        />
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium text-body-small text-gray-500">
                          {item.quantity}x
                        </span>
                        <div className="flex flex-col items-start gap-1">
                          <strong className="font-semibold text-body-medium">
                            {item.product.name}
                          </strong>
                          <span className="font-medium text-body-small text-gray-500">
                            {CurrencyHelper.formatToBRL(item.product.price)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-body-small text-gray-500 leading-body-small">
                    Total
                  </span>
                  <strong className="font-bold text-body-medium leading-h5">
                    {CurrencyHelper.formatToBRL(totalPrice)}
                  </strong>
                </div>
              </section>
            </article>
            <footer className="flex items-center justify-between">
              <Button onClick={onClose} type="button" variant="secondary">
                Cancelar pedido
              </Button>
              {order.status !== 'DONE' && (
                <Button
                  onClick={handleActionModal}
                  type="button"
                  variant="primary"
                >
                  {buttonLabelByOrderStatus[order?.status]}
                </Button>
              )}
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
