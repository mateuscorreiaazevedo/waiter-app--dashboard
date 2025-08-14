import { Plus } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import { CreateProductModal } from '@/modules/products';

export function Header() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  function handleVisibleModal() {
    setIsVisibleModal(true);
  }

  function handleHideModal() {
    setIsVisibleModal(false);
  }

  return (
    <>
      <header className="sticky top-0 flex h-[198px] w-full items-center bg-primary">
        <nav className="container relative mx-auto flex max-w-7xl items-center justify-between">
          <div className="space-y-1.5">
            <h1 className="font-semibold text-3xl text-text-foreground leading-8">
              Pedidos
            </h1>
            <h2 className="text-base text-text-foreground">
              Acompanhe os pedidos dos clientes
            </h2>
          </div>
          <img alt="WaiterApp logo" loading="lazy" src={logo} />
          <button
            className="absolute top-full right-0 flex size-10 translate-y-[8px] cursor-pointer items-center justify-center rounded-full border border-primary bg-white shadow-2xl hover:bg-gray-100"
            onClick={handleVisibleModal}
            type="button"
          >
            <Plus className="size-5" />
          </button>
        </nav>
      </header>
      <CreateProductModal onClose={handleHideModal} visible={isVisibleModal} />
    </>
  );
}
