import '../assets/styles/globals.css';
import { BoardOrders } from '@/components/features/orders/board-orders';
import { Content, Header } from '@/components/layout';

export function App() {
  return (
    <>
      <Header />
      <Content>
        <BoardOrders />
      </Content>
    </>
  );
}
