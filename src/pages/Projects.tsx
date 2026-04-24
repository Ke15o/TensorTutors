export function Projects() {
  return (
    <section className="page-shell py-12">
      <p className="text-sm font-semibold uppercase text-circuit-300">Projects</p>
      <h1 className="mt-3 text-4xl font-semibold text-chalk-100">Small Computer Science projects</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-chalk-200/80">
        Compact build ideas that reinforce tutorial topics without needing a backend.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Data structure playground", "Algorithm trace notebook", "Logic gate simulator"].map((title) => (
          <div key={title} className="rounded-lg border border-white/10 bg-ink-900/70 p-5">
            <h2 className="text-lg font-semibold text-chalk-100">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-chalk-200/75">Project brief planned.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
