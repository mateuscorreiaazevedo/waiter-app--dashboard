import { useFetchOrders } from '../../hooks/useFetchOrders';
import { BoardOrderItem } from './BoardOrdersItem';
import { BoardOrdersSkeleton } from './BoardOrdersSkeleton';

export function BoardOrders() {
  const { orders, isOrdersFetched, loadingOrders } = useFetchOrders();

  if (loadingOrders) {
    return <BoardOrdersSkeleton />;
  }

  return (
    <div className="flex w-full gap-6">
      {isOrdersFetched && !loadingOrders && (
        <>
          <BoardOrderItem
            icon="🕒"
            orders={orders?.filter(order => order.status === 'WAITING')}
            title="Fila de espera"
          />
          <BoardOrderItem
            icon="👩‍🍳"
            orders={orders?.filter(order => order.status === 'IN_PRODUCTION')}
            title="Em produção"
          />
          <BoardOrderItem
            icon="✅"
            orders={orders?.filter(order => order.status === 'DONE')}
            title="Pronto"
          />
        </>
      )}
    </div>
  );
}
