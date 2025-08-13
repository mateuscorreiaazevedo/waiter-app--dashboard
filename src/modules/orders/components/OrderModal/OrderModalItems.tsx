import { useMemo } from 'react';
import { CurrencyHelper } from '@/modules/core';
import type { OrderProductModel } from '../../models/OrderProduct';

type Props = {
  products: OrderProductModel[];
};

export function OrderModalItems({ products }: Props) {
  const totalPrice = useMemo(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    return total;
  }, [products]);

  return (
    <section className="flex flex-col gap-4">
      <span className="font-medium text-body-small text-gray-500">Itens</span>
      <ul className="flex flex-col gap-4">
        {products.map(item => (
          <li className="flex items-center gap-3" key={item.product._id}>
            <div className="flex h-12 w-10 items-center justify-center rounded-md bg-gray-100">
              <img
                alt={item.product.name}
                className="h-12 w-10 flex-1 rounded-md object-cover"
                loading="lazy"
                // TODO: Change src to API's BASE_URL + item.product.imagePath
                src={item.product.imagePath}
              />
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-body-small text-gray-500">
                {item.quantity}x
              </span>
              <div className="flex flex-col items-start gap-1">
                <strong className="font-semibold text-body-medium">
                  {item.product.name}
                </strong>
                <span className="font-medium text-body-small text-gray-500">
                  {CurrencyHelper.formatToBRL(item.product.price)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="font-medium text-body-small text-gray-500 leading-body-small">
          Total
        </span>
        <strong className="font-bold text-body-medium leading-h5">
          {CurrencyHelper.formatToBRL(totalPrice)}
        </strong>
      </div>
    </section>
  );
}
