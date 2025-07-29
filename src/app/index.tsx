import { Header } from '@/components/layout/header';
import '../assets/styles/globals.css';
import { BoardOrders } from '@/components/features/orders/board-orders';

export function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 flex max-w-7xl">
        <BoardOrders />
      </main>
    </>
  );
}
