import { BoardOrderItem } from './BoardOrdersItem';

export function BoardOrders() {
  return (
    <div className="flex w-full gap-6">
      <BoardOrderItem icon="🕒" orders={[]} title="Fila de espera" />
      <BoardOrderItem icon="👩‍🍳" orders={[]} title="Em produção" />
      <BoardOrderItem icon="✅" orders={[]} title="Pronto" />
    </div>
  );
}
