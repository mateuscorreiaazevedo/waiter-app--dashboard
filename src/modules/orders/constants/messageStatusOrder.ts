import type { OrderStatusType } from '../types/OrderStatusType';

export const TABLE_NUMBER = 'TABLE_NUMBER';

export const messageStatusOrderConstant: Partial<
  Record<OrderStatusType, string>
> = {
  IN_PRODUCTION: `O pedido da mesa ${TABLE_NUMBER} está em produção`,
  DONE: `O pedido da mesa ${TABLE_NUMBER} está pronto!`,
};
