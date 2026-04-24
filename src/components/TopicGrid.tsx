import type { MajorTopic } from "../types/topic";

type TopicGridProps = {
  topics: MajorTopic[];
};

export function TopicGrid({ topics }: TopicGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {topics.map((topic) => (
        <a
          key={topic.slug}
          className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-3 transition hover:border-circuit-300/40 hover:bg-ink-800 sm:p-4"
          href={`/tutorials/${topic.slug}`}
        >
          <h2 className="text-base font-semibold text-chalk-100 sm:text-lg">{topic.title}</h2>
          <p className="mt-2 text-sm leading-6 text-chalk-200/70">{topic.summary}</p>
        </a>
      ))}
    </div>
  );
}
