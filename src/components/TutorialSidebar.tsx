import type { TutorialCategory } from "../types/topic";
import { classNames } from "../utils/classNames";

type TutorialSidebarProps = {
  category: TutorialCategory;
  activeTopicSlug?: string;
};

export function TutorialSidebar({ category, activeTopicSlug }: TutorialSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
      <div className="rounded-lg border border-white/10 bg-ink-900/70 p-4 shadow-line">
        <p className="text-xs font-semibold uppercase text-circuit-300">{category.title}</p>
        <nav className="mt-4 grid gap-1" aria-label={`${category.title} topics`}>
          {category.subtopics.map((topic) => (
            <a
              key={topic.slug}
              className={classNames(
                "focus-ring rounded-md px-3 py-2 text-sm transition",
                activeTopicSlug === topic.slug
                  ? "bg-circuit-300/10 text-circuit-300"
                  : "text-chalk-200/75 hover:bg-white/5 hover:text-chalk-100",
              )}
              href={`/tutorials/${category.slug}/${topic.slug}`}
            >
              {topic.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
