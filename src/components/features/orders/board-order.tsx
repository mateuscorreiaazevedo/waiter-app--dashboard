import type { Order } from '@/api/types/orders';

export type BoardOrderProps = {
  icon: string;
  title: string;
  orders: Order[];
};

export function BoardOrder({ icon, title, orders }: BoardOrderProps) {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-gray-300/40 p-4">
      <header className="flex items-center justify-center gap-2 p-2">
        <span>{icon}</span>
        <strong> {title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 &&
        orders.map(order => (
          <button
            className="h-32 space-y-1 rounded-lg border border-gray-300/40 bg-white transition-all hover:bg-white/80 hover:shadow-sm"
            key={order.table}
            type="button"
          >
            <h3 className="font-semibold text-body-medium">{order.table}</h3>
            <span className="text-body-small text-gray-700">
              {order.products.length} itens
            </span>
          </button>
        ))}

      {!orders.length && (
        <div className="flex flex-1 items-center justify-center">
          <span className="font-medium text-body-medium text-gray-700">
            Nenhum pedido.
          </span>
        </div>
      )}
    </div>
  );
}
