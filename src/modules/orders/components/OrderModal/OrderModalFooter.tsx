import { Button } from '@/modules/core/components/ui';
import type { OrderStatusType } from '../../types/OrderStatusType';

type Props = {
  status: OrderStatusType;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
};

export function OrderModalFooter({ onClose, onConfirm, status }: Props) {
  const buttonLabelByOrderStatus: Partial<Record<OrderStatusType, string>> = {
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
