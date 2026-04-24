import { getConceptHref } from "../data/topics";
import type { MajorTopic } from "../types/topic";
import { classNames } from "../utils/classNames";

type TutorialSidebarProps = {
  topic: MajorTopic;
  activeConceptId: string;
};

export function TutorialSidebar({ topic, activeConceptId }: TutorialSidebarProps) {
  return (
    <aside className="border-b border-white/10 bg-ink-900/70 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
      <div className="px-5 py-6 sm:px-6 lg:py-10 lg:pl-8 lg:pr-6">
        <a className="focus-ring text-xs font-semibold uppercase text-circuit-300" href="/tutorials">
          Tutorials
        </a>
        <h2 className="mt-3 text-lg font-semibold text-chalk-100">{topic.title}</h2>
        <nav className="mt-5 grid gap-5" aria-label={`${topic.title} concepts`}>
          {topic.subtopics.map((subtopic) => (
            <section key={subtopic.slug}>
              <h3 className="text-xs font-semibold uppercase text-chalk-400">{subtopic.title}</h3>
              <div className="mt-2 grid gap-1 lg:-ml-8 lg:-mr-6">
                {subtopic.concepts.map((concept) => {
                  const isActive = activeConceptId === concept.id;

                  return (
                    <a
                      key={concept.id}
                      className={classNames(
                        "focus-ring group relative overflow-hidden rounded-md px-3 py-2 text-sm transition-colors duration-200 lg:rounded-none lg:pl-11 lg:pr-6",
                        isActive
                          ? "bg-circuit-300/10 text-circuit-300"
                          : "text-chalk-200/75 hover:bg-white/5 hover:text-chalk-100",
                      )}
                      href={getConceptHref(topic, subtopic, concept)}
                    >
                      <span
                        className={classNames(
                          "block transition-transform duration-200 ease-out",
                          isActive ? "translate-x-1.5" : "group-hover:translate-x-1.5",
                        )}
                      >
                        {concept.title}
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>
      </div>
    </aside>
  );
}
