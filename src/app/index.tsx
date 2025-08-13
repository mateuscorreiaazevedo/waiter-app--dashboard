import '../assets/styles/globals.css';
import { Content, Header, QueryProvider } from '@/modules/core';
import { BoardOrders } from '@/modules/orders';

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
