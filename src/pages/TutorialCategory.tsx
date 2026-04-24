import { TutorialLayout } from "../components/TutorialLayout";
import type { TutorialCategory } from "../types/topic";

type TutorialCategoryPageProps = {
  category: TutorialCategory;
};

export function TutorialCategory({ category }: TutorialCategoryPageProps) {
  return (
    <TutorialLayout category={category}>
      <article className="max-w-4xl">
        <p className="text-sm font-semibold uppercase text-circuit-300">Tutorial category</p>
        <h1 className="mt-3 text-4xl font-semibold text-chalk-100">{category.title}</h1>
        <p className="mt-4 text-base leading-8 text-chalk-200/85">{category.description}</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-chalk-100">Subtopics</h2>
          <div className="mt-5 grid gap-3">
            {category.subtopics.map((topic) => (
              <a
                key={topic.slug}
                className="focus-ring rounded-lg border border-white/10 bg-ink-900/70 p-4 transition hover:border-circuit-300/40 hover:bg-ink-800"
                href={`/tutorials/${category.slug}/${topic.slug}`}
              >
                <h3 className="text-lg font-semibold text-chalk-100">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-chalk-200/75">{topic.summary}</p>
              </a>
            ))}
          </div>
        </section>
      </article>
    </TutorialLayout>
  );
}
