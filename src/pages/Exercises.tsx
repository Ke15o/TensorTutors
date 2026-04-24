import { exercises } from "../data/topics";

export function Exercises() {
  return (
    <section className="page-shell py-12">
      <p className="text-sm font-semibold uppercase text-circuit-300">Exercises</p>
      <h1 className="mt-3 text-4xl font-semibold text-chalk-100">Practice by topic</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-chalk-200/80">
        Short practice sets for tracing, definitions, comparisons, and exam-style explanation.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {exercises.map((exercise) => (
          <a
            key={exercise.title}
            className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-5 transition hover:border-circuit-300/40 hover:bg-ink-800"
            href={exercise.href}
          >
            <span className="text-xs font-semibold uppercase text-circuit-300">{exercise.category}</span>
            <h2 className="mt-3 text-lg font-semibold text-chalk-100">{exercise.title}</h2>
            <p className="mt-2 text-sm leading-6 text-chalk-200/75">{exercise.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
