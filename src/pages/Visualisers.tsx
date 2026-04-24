export function Visualisers() {
  return (
    <section className="page-shell py-12">
      <p className="text-sm font-semibold uppercase text-circuit-300">Visualisers</p>
      <h1 className="mt-3 text-4xl font-semibold text-chalk-100">Visual explainers</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-chalk-200/80">
        Focused visual tools for algorithms, memory, logic, networking, and data representation.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Linked list pointers", "Binary search", "Truth tables"].map((title) => (
          <div key={title} className="rounded-lg border border-white/10 bg-ink-900/70 p-5">
            <h2 className="text-lg font-semibold text-chalk-100">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-chalk-200/75">Interactive reference visualiser planned.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
