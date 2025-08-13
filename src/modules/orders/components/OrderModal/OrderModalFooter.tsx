import { Loader2 } from 'lucide-react';
import { Button } from '@/modules/core/components/ui';
import { useCancelOrder } from '../../hooks/useCancelOrder';
import { useChangeStatusOrder } from '../../hooks/useChangeStatusOrder';
import type { OrderStatusType } from '../../types/OrderStatusType';

type Props = {
  status: OrderStatusType;
  onClose: VoidFunction;
  orderId: string;
};

export function OrderModalFooter({ onClose, status, orderId }: Props) {
  const { onCancelOrder, isCancelOrderPending } = useCancelOrder();
  const { onChangeStatusOrder, isChangeStatusOrderPending } =
    useChangeStatusOrder();

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

  async function handleChangeStatusOrder() {
    await onChangeStatusOrder(
      { orderId, status: status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE' },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  }

  return (
    <footer
      className={`flex items-center ${status === 'WAITING' ? 'justify-between' : 'justify-end'}`}
    >
      {status === 'WAITING' && (
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
      )}
      {status !== 'DONE' && (
        <Button
          disabled={isChangeStatusOrderPending}
          onClick={handleChangeStatusOrder}
          type="button"
          variant="primary"
        >
          {isChangeStatusOrderPending && (
            <>
              <Loader2 className="mr-1 size-5 animate-spin text-text-foreground duration-[2s]" />
              Aguarde...
            </>
          )}
          {!isChangeStatusOrderPending && buttonLabelByOrderStatus[status]}
        </Button>
      )}
    </footer>
  );
}
