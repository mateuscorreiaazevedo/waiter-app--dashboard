import '../assets/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { Content, Header, QueryProvider } from '@/modules/core';
import { BoardOrders } from '@/modules/orders';

export function App() {
  return (
    <QueryProvider>
      <Header />
      <Content>
        <BoardOrders />
      </Content>
      <Toaster position="top-right" />
    </QueryProvider>
  );
}
