import { references } from "../data/topics";

export function References() {
  return (
    <section className="page-shell py-12">
      <p className="text-sm font-semibold uppercase text-circuit-300">References</p>
      <h1 className="mt-3 text-4xl font-semibold text-chalk-100">Computer Science references</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-chalk-200/80">
        Fast lookup pages for definitions, rules, operations, and comparisons.
      </p>
      <div className="mt-8 divide-y divide-white/10 rounded-lg border border-white/10 bg-ink-900/70">
        {references.map((reference) => (
          <a key={reference.title} className="focus-ring block p-5 transition hover:bg-white/[0.03]" href={reference.href}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-chalk-100">{reference.title}</h2>
              <span className="text-xs uppercase text-chalk-400">{reference.category}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-chalk-200/75">{reference.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
