import { Card } from "../components/Card";
import { lessonSteps, siteSections } from "../data/site";
import { topics } from "../data/topics";

const featuredTopics = topics.slice(0, 6);

export function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-white/10 bg-ink-950">
        <div className="page-shell grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase text-circuit-300">Computer Science, properly structured</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-chalk-100 sm:text-6xl">
              TensorTutors
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-chalk-200/80">
              A static-first learning platform for GCSE, A-Level, and early university students: concise lessons,
              worked examples, visual explanations, exam practice, and clear routes through the subject.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="focus-ring rounded-md bg-circuit-300 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-circuit-400" href="#/learn">
                Start learning
              </a>
              <a className="focus-ring rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-chalk-100 transition hover:border-theorem-300/60 hover:bg-white/5" href="#/roadmaps">
                View roadmaps
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-ink-900 p-4 shadow-panel">
            <div className="grid gap-3 rounded-md bg-ink-950 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-circuit-300">lesson.flow</span>
                <span className="text-xs text-chalk-400">MVP</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {lessonSteps.map((step, index) => (
                  <div key={step} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                    <span className="font-mono text-xs text-theorem-300">0{index + 1}</span>
                    <p className="mt-3 text-lg font-semibold text-chalk-100">{step}</p>
                    <div className="mt-4 h-1.5 rounded-full bg-white/10">
                      <div className="h-1.5 rounded-full bg-circuit-300" style={{ width: `${45 + index * 14}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {["trace", "quiz", "diagram"].map((label) => (
                  <span key={label} className="rounded-md border border-white/10 px-3 py-2 text-center font-mono text-xs text-chalk-200/80">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-theorem-300">Core areas</p>
            <h2 className="mt-3 text-3xl font-semibold text-chalk-100">Learning starts with a map</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-chalk-200/70">
            Topics are stored locally for now so lessons, cards, quizzes, and future visualisers can share one clean source.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredTopics.map((topic) => (
            <Card key={topic.id} eyebrow={topic.area} title={topic.title} meta={topic.level}>
              <p>{topic.summary}</p>
              <ul className="mt-4 grid gap-2">
                {topic.objectives.map((objective) => (
                  <li key={objective} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-circuit-300" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/60">
        <div className="page-shell py-12">
          <p className="text-sm font-semibold uppercase text-proof-300">Site sections</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siteSections.map((section) => (
              <a
                key={section}
                className="focus-ring rounded-lg border border-white/10 bg-ink-950/70 px-4 py-4 text-sm font-semibold text-chalk-100 transition hover:-translate-y-1 hover:border-proof-300/50"
                href={`#/${section.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
