import type { Concept, MajorTopic, Subtopic } from "../types/topic";

type AdjacentConcept = {
  subtopic: Subtopic;
  concept: Concept;
  href: string;
};

type PrevNextNavProps = {
  previous?: AdjacentConcept;
  next?: AdjacentConcept;
  topic: MajorTopic;
};

export function PrevNextNav({ previous, next, topic }: PrevNextNavProps) {
  return (
    <nav className="grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2" aria-label="Concept navigation">
      {previous ? (
        <a
          className="focus-ring group rounded-lg border border-white/10 bg-ink-900/60 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-circuit-300/40 hover:bg-ink-900"
          href={previous.href}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-chalk-400">Previous</span>
          <span className="mt-2 block font-semibold text-chalk-100 transition group-hover:text-circuit-300">
            {previous.concept.title}
          </span>
          <span className="mt-1 block text-sm text-chalk-400/80">{previous.subtopic.title}</span>
        </a>
      ) : (
        <a
          className="focus-ring group rounded-lg border border-white/10 bg-ink-900/60 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-circuit-300/40 hover:bg-ink-900"
          href={`/tutorials/${topic.slug}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-chalk-400">Back to</span>
          <span className="mt-2 block font-semibold text-chalk-100 transition group-hover:text-circuit-300">{topic.title}</span>
        </a>
      )}

      {next ? (
        <a
          className="focus-ring group rounded-lg border border-white/10 bg-ink-900/60 p-5 text-right transition duration-200 hover:-translate-y-0.5 hover:border-circuit-300/40 hover:bg-ink-900"
          href={next.href}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-chalk-400">Next</span>
          <span className="mt-2 block font-semibold text-chalk-100 transition group-hover:text-circuit-300">
            {next.concept.title}
          </span>
          <span className="mt-1 block text-sm text-chalk-400/80">{next.subtopic.title}</span>
        </a>
      ) : null}
    </nav>
  );
}
