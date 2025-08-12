import '../assets/styles/globals.css';
import { BoardOrders } from '@/components/features/orders/board-orders';
import { QueryProvider } from '@/modules/core';
import { Content, Header } from '@/modules/core/components/layout';

export function App() {
  return (
    <QueryProvider>
      <Header />
      <Content>
        <BoardOrders />
      </Content>
    </QueryProvider>
  );
}
