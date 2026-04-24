import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { getConceptHref } from "../lib/learning";
import type { MajorTopic } from "../types/topic";
import { classNames } from "../utils/classNames";

type TutorialSidebarProps = {
  topic: MajorTopic;
  activeConceptId: string;
};

export function TutorialSidebar({ topic, activeConceptId }: TutorialSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const conceptCount = useMemo(
    () => topic.subtopics.reduce((total, subtopic) => total + subtopic.concepts.length, 0),
    [topic],
  );
  const hasMobileOverflow = conceptCount > 3;

  useEffect(() => {
    setIsExpanded(false);
  }, [activeConceptId, topic.id]);

  const toggleExpanded = () => setIsExpanded((current) => !current);

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpanded();
    }
  };

  return (
    <aside className="border-b border-white/10 bg-ink-900/70 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
      <div className="px-5 py-6 sm:px-6 lg:py-10 lg:pl-8 lg:pr-6">
        <a
          className="focus-ring inline-flex rounded-md border border-white/10 px-2.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-circuit-300 transition hover:border-circuit-300/40 hover:text-circuit-400"
          href="/"
        >
          Home
        </a>
        <h2 className="mt-3 text-lg font-semibold text-chalk-100">{topic.title}</h2>
        <nav className="mt-2 grid gap-2 lg:mt-5 lg:gap-5" aria-label={`${topic.title} concepts`}>
          <div
            className={classNames(
              "grid gap-5 overflow-hidden opacity-100 transition-[max-height,opacity] duration-300 ease-out lg:max-h-none lg:overflow-visible lg:opacity-100",
              hasMobileOverflow && !isExpanded ? "max-h-0 opacity-0" : "max-h-[80vh] overflow-y-auto",
            )}
          >
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
                        onClick={() => setIsExpanded(false)}
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
          </div>

          {hasMobileOverflow ? (
            <div
              className="focus-ring mx-auto flex h-6 w-20 cursor-pointer items-center justify-center text-chalk-300/70 transition-colors duration-200 hover:text-circuit-300 lg:hidden"
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Collapse topics" : "Expand topics"}
              onClick={toggleExpanded}
              onKeyDown={handleToggleKeyDown}
            >
              <svg
                className={classNames("h-5 w-14 transition-transform duration-300 ease-out", isExpanded && "rotate-180")}
                viewBox="0 0 64 48"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 27L32 11L58 27"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 41L32 25L58 41"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : null}
        </nav>
      </div>
    </aside>
  );
}
