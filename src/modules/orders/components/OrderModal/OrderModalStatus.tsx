import type { OrderStatusType } from '@/modules/orders';

type Props = {
  status: OrderStatusType;
};

export function OrderModalStatus({ status }: Props) {
  const iconByOrderStatus: Record<OrderStatusType, string> = {
    WAITING: '🕒',
    IN_PRODUCTION: '👩‍🍳',
    DONE: '✅',
  };

  const statusLabelByOrderStatus: Record<OrderStatusType, string> = {
    WAITING: 'Fila de espera',
    IN_PRODUCTION: 'Em produção',
    DONE: 'Pronto',
  };

  return (
    <section className="flex flex-col gap-2">
      <span className="font-medium text-body-small text-gray-500">
        Status do pedido
      </span>
      <div className="flex items-center gap-2">
        <span>{iconByOrderStatus[status]}</span>
        <strong className="font-semibold text-body-medium">
          {statusLabelByOrderStatus[status]}
        </strong>
      </div>
    </section>
  );
}
