import { Button } from '@/components/ui';
import type { OrderStatus } from '@/types/features/orders';

type Props = {
  status: OrderStatus;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
};

export function OrderModalFooter({ onClose, onConfirm, status }: Props) {
  const buttonLabelByOrderStatus: Partial<Record<OrderStatus, string>> = {
    WAITING: 'Iniciar produção',
    IN_PRODUCTION: 'Concluir pedido',
  };

  return (
    <footer className="flex items-center justify-between">
      <Button onClick={onClose} type="button" variant="secondary">
        Cancelar pedido
      </Button>
      {status !== 'DONE' && (
        <Button onClick={onConfirm} type="button" variant="primary">
          {buttonLabelByOrderStatus[status]}
        </Button>
      )}
    </footer>
  );
}
