import { useId } from 'react';

export function RowFilterCategoriesSkeleton() {
  const idKey = useId();

  return Array.from({ length: 4 }, (_, index) => (
    <div
      className="flex flex-col items-center gap-2 px-2 py-4"
      key={`${idKey}-${index + 1}`}
    >
      <div className="flex size-[52px] animate-pulse items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
      <div className="h-4 w-16 animate-pulse rounded bg-white shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
    </div>
  ));
}
