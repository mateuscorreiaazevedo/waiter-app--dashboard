import { useFetchOrders } from '@/hooks/features/orders';
import { BoardOrderItem } from './board-order-item';
import { BoardOrdersSkeleton } from './board-orders-skeleton';

export function BoardOrders() {
  const { orders, isLoading } = useFetchOrders();

  if (isLoading) {
    return <BoardOrdersSkeleton />;
  }

  return (
    <div className="flex w-full gap-6">
      <BoardOrderItem icon="🕒" orders={orders} title="Fila de espera" />
      <BoardOrderItem icon="👩‍🍳" orders={[]} title="Em produção" />
      <BoardOrderItem icon="✅" orders={[]} title="Pronto" />
    </div>
  );
}
