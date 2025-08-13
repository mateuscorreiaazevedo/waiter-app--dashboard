import logo from '@/assets/images/logo.svg';

export function Header() {
  return (
    <header className="sticky top-0 flex h-[198px] w-full items-center bg-primary">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between">
        <div className="space-y-1.5">
          <h1 className="font-semibold text-3xl text-text-foreground leading-8">
            Pedidos
          </h1>
          <h2 className="text-base text-text-foreground">
            Acompanhe os pedidos dos clientes
          </h2>
        </div>
        <img alt="WaiterApp logo" loading="lazy" src={logo} />
      </nav>
    </header>
  );
}
