import { BoardOrder } from './board-order';

export function ListOrders() {
  return (
    <div className="flex w-full gap-6">
      <BoardOrder />
      <BoardOrder />
      <BoardOrder />
    </div>
  );
}
