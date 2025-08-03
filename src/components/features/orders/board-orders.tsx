import type { Order } from '@/types/features/orders';
import { BoardOrderItem } from './board-order-item';

export function BoardOrders() {
  const orders: Order[] = [
    {
      _id: '1',
      table: '2',
      status: 'WAITING',
      products: [
        {
          _id: '1',
          quantity: 1,
          product: {
            _id: '1',
            name: 'Bife',
            imagePath:
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 40,
          },
        },
        {
          _id: '2',
          quantity: 1,
          product: {
            _id: '2',
            name: 'Coca-Cola Zero',
            imagePath:
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 5.6,
          },
        },
      ],
      createdAt: '2025-07-28T23:16:49.000Z',
    },
  ];

  return (
    <div className="flex w-full gap-6">
      <BoardOrderItem icon="🕒" orders={orders} title="Fila de espera" />
      <BoardOrderItem icon="👩‍🍳" orders={[]} title="Em produção" />
      <BoardOrderItem icon="✅" orders={[]} title="Pronto" />
    </div>
  );
}
