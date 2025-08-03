import '../assets/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BoardOrders } from '@/components/features/orders/board-orders';
import { Content, Header } from '@/components/layout';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Content>
        <BoardOrders />
      </Content>
    </QueryClientProvider>
  );
}
