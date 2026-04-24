import { ContentBlocks } from "../components/ContentBlocks";
import { TutorialLayout } from "../components/TutorialLayout";
import { getAdjacentTopics } from "../data/topics";
import type { Subtopic, TutorialCategory } from "../types/topic";

type TutorialTopicProps = {
  category: TutorialCategory;
  topic: Subtopic;
};

export function TutorialTopic({ category, topic }: TutorialTopicProps) {
  const { previous, next } = getAdjacentTopics(category.slug, topic.slug);

  return (
    <TutorialLayout category={category} activeTopicSlug={topic.slug}>
      <article className="max-w-4xl">
        <p className="text-sm font-semibold uppercase text-circuit-300">{category.title}</p>
        <h1 className="mt-3 text-4xl font-semibold text-chalk-100">{topic.title}</h1>
        <p className="mt-4 text-lg leading-8 text-chalk-200/80">{topic.summary}</p>

        <div className="mt-10 grid gap-10">
          {topic.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-chalk-100">{section.title}</h2>
              <div className="mt-5 grid gap-5">
                <ContentBlocks blocks={section.blocks} />
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-12 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2" aria-label="Topic pagination">
          {previous ? (
            <a
              className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-4 transition hover:border-circuit-300/40"
              href={`/tutorials/${category.slug}/${previous.slug}`}
            >
              <span className="text-xs uppercase text-chalk-400">Previous</span>
              <span className="mt-2 block font-semibold text-chalk-100">{previous.title}</span>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a
              className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-4 text-right transition hover:border-circuit-300/40"
              href={`/tutorials/${category.slug}/${next.slug}`}
            >
              <span className="text-xs uppercase text-chalk-400">Next</span>
              <span className="mt-2 block font-semibold text-chalk-100">{next.title}</span>
            </a>
          ) : null}
        </nav>
      </article>
    </TutorialLayout>
  );
}
