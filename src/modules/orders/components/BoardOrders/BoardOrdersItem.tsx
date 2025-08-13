import { useState } from 'react';
import type { OrderModel } from '../../models/Order';
import { OrderModal } from '../OrderModal';

export type BoardOrderProps = {
  icon: string;
  title: string;
  orders?: OrderModel[];
};

export function BoardOrderItem({ icon, title, orders }: BoardOrderProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderModel | null>(null);

  function handleOpenOrder(order: OrderModel) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseOrder() {
    setSelectedOrder(null);
    setIsModalVisible(false);
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-gray-300/40 p-4">
        <header className="flex items-center justify-center gap-2 p-2">
          <span>{icon}</span>
          <strong> {title}</strong>
          <span>({orders?.length})</span>
        </header>

        {!!orders?.length &&
          orders.map(order => (
            <button
              className="h-32 space-y-1 rounded-lg border border-gray-300/40 bg-white transition-all hover:bg-white/80 hover:shadow-sm"
              key={order.table}
              onClick={() => handleOpenOrder(order)}
              type="button"
            >
              <h3 className="font-semibold text-body-medium">
                Mesa {order.table.padStart(2, '0')}
              </h3>
              <span className="text-body-small text-gray-700">
                {order.products.length} itens
              </span>
            </button>
          ))}
      </div>
      <OrderModal
        onClose={handleCloseOrder}
        order={selectedOrder}
        visible={isModalVisible}
      />
    </>
  );
}
