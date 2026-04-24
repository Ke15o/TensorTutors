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
    <nav className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2" aria-label="Concept navigation">
      {previous ? (
        <a className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-4 transition hover:border-circuit-300/40" href={previous.href}>
          <span className="text-xs uppercase text-chalk-400">Previous</span>
          <span className="mt-2 block font-semibold text-chalk-100">{previous.concept.title}</span>
          <span className="mt-1 block text-sm text-chalk-400">{previous.subtopic.title}</span>
        </a>
      ) : (
        <a className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-4 transition hover:border-circuit-300/40" href={`/tutorials/${topic.slug}`}>
          <span className="text-xs uppercase text-chalk-400">Back to</span>
          <span className="mt-2 block font-semibold text-chalk-100">{topic.title}</span>
        </a>
      )}

      {next ? (
        <a className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-4 text-right transition hover:border-circuit-300/40" href={next.href}>
          <span className="text-xs uppercase text-chalk-400">Next</span>
          <span className="mt-2 block font-semibold text-chalk-100">{next.concept.title}</span>
          <span className="mt-1 block text-sm text-chalk-400">{next.subtopic.title}</span>
        </a>
      ) : null}
    </nav>
  );
}
