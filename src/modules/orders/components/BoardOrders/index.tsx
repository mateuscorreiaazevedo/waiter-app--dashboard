import { useMemo } from 'react';
import { useFetchOrders } from '../../hooks/useFetchOrders';
import { BoardOrderItem } from './BoardOrdersItem';
import { BoardOrdersSkeleton } from './BoardOrdersSkeleton';

export function BoardOrders() {
  const { orders, isOrdersFetched, loadingOrders } = useFetchOrders();

  const waitingOrders = useMemo(
    () => orders?.filter(order => order.status === 'WAITING'),
    [orders]
  );
  const inProductionOrders = useMemo(
    () => orders?.filter(order => order.status === 'IN_PRODUCTION'),
    [orders]
  );
  const doneOrders = useMemo(
    () => orders?.filter(order => order.status === 'DONE'),
    [orders]
  );

  if (loadingOrders) {
    return <BoardOrdersSkeleton />;
  }

  return (
    <div className="flex w-full gap-6">
      {isOrdersFetched && !loadingOrders && (
        <>
          <BoardOrderItem
            icon="🕒"
            orders={waitingOrders}
            title="Fila de espera"
          />
          <BoardOrderItem
            icon="👩‍🍳"
            orders={inProductionOrders}
            title="Em produção"
          />
          <BoardOrderItem icon="✅" orders={doneOrders} title="Pronto" />
        </>
      )}
    </div>
  );
}
