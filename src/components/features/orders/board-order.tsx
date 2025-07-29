export function BoardOrder() {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-gray-300/40 p-4">
      <header className="flex items-center justify-center gap-2 p-2">
        <span>🕒</span>
        <strong> Fila de espera</strong>
        <span>(1)</span>
      </header>

      <button
        className="h-32 space-y-1 rounded-lg border border-gray-300/40 bg-white transition-all hover:bg-gray-100"
        type="button"
      >
        <h3 className="font-semibold text-body-medium">Mesa 2</h3>
        <span className="text-body-small text-gray-700">1 item</span>
      </button>
    </div>
  );
}
