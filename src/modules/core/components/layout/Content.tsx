import type { PropsWithChildren } from "react";

export function Content({ children }: PropsWithChildren) {
  return (
    <main className="container mx-auto my-10 flex max-w-7xl flex-col">
      {children}
    </main>
  );
}
