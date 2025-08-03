export function BoardOrdersSkeleton() {
  return (
    <div className="flex w-full gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="h-56 w-full animate-pulse rounded-2xl bg-gray-300"
          key={`skeleton-${index + 1}`}
        />
      ))}
    </div>
  );
}
