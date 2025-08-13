import { Loader2 } from 'lucide-react';
import { Button } from '@/modules/core/components/ui';
import { useCancelOrder } from '../../hooks/useCancelOrder';
import type { OrderStatusType } from '../../types/OrderStatusType';

type Props = {
  status: OrderStatusType;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
  orderId: string;
};

export function OrderModalFooter({
  onClose,
  onConfirm,
  status,
  orderId,
}: Props) {
  const { onCancelOrder, isCancelOrderPending } = useCancelOrder();

  const buttonLabelByOrderStatus: Partial<Record<OrderStatusType, string>> = {
    WAITING: 'Iniciar produção',
    IN_PRODUCTION: 'Concluir pedido',
  };

  async function handleCancelOrder() {
    await onCancelOrder(
      { orderId },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  }

  return (
    <footer className="flex items-center justify-between">
      <Button
        disabled={isCancelOrderPending}
        onClick={handleCancelOrder}
        type="button"
        variant="secondary"
      >
        {isCancelOrderPending && (
          <>
            <Loader2 className="mr-1 size-5 animate-spin text-primary duration-[2s]" />
            Cancelando...
          </>
        )}
        {!isCancelOrderPending && 'Cancelar pedido'}
      </Button>
      {status !== 'DONE' && (
        <Button onClick={onConfirm} type="button" variant="primary">
          {buttonLabelByOrderStatus[status]}
        </Button>
      )}
    </footer>
  );
}
