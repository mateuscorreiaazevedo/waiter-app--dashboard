import type { Order } from '@/api/types/orders';
import { BoardOrder } from './board-order';

export function ListOrders() {
  const orders: Order[] = [
    {
      _id: '1',
      table: 'Mesa 1',
      status: 'WAITING',
      products: [
        {
          _id: '1',
          quantity: 1,
          product: { _id: '1', name: 'Bife', imagePath: '', price: 10 },
        },
      ],
      createdAt: '2025-07-28T23:16:49.000Z',
    },
  ];

  return (
    <div className="flex w-full gap-6">
      <BoardOrder icon="🕒" orders={orders} title="Fila de espera" />
      <BoardOrder icon="👩‍🍳" orders={[]} title="Em produção" />
      <BoardOrder icon="✅" orders={[]} title="Pronto" />
    </div>
  );
}
