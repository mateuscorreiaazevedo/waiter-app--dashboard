import logo from '@/assets/images/logo.svg';

export function Header() {
  return (
    <header className="sticky top-0 flex h-[198px] w-full items-center bg-primary">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between">
        <div className="space-y-1.5">
          <h1 className="font-semibold text-h1 text-text-foreground leading-h1">
            Pedidos
          </h1>
          <h2 className="text-body-medium text-text-foreground leading-h2">
            Acompanhe os pedidos dos clientes
          </h2>
        </div>
        <img alt="WaiterApp logo" loading="lazy" src={logo} />
      </nav>
    </header>
  );
}
