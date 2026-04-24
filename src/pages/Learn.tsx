import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { getPathwayTopics, pathways } from "../data/topics";

export function Learn() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Structured lessons for the full Computer Science syllabus"
        summary="Each lesson will move from explanation to visualisation, practice, and a short test."
      />
      <section className="page-shell py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-circuit-300">Pathways</p>
            <h2 className="mt-3 text-3xl font-semibold text-chalk-100">Choose the route that matches your level</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-chalk-200/70">
            Pathways are generated from the same topic data source and filtered by level, so topics stay consistent as
            the curriculum grows.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {pathways.map((pathway) => {
            const pathwayTopics = getPathwayTopics(pathway.id);

            return (
              <a key={pathway.id} className="focus-ring rounded-lg" href={`#/learn/${pathway.id}`}>
                <Card eyebrow={pathway.label} title={pathway.title} meta={`${pathwayTopics.length} topics`}>
                  <p>{pathway.summary}</p>
                  <ol className="mt-4 grid gap-2">
                    {pathwayTopics.slice(0, 4).map((topic, index) => (
                      <li key={topic.id} className="flex gap-3">
                        <span className="font-mono text-xs text-circuit-300">{String(index + 1).padStart(2, "0")}</span>
                        <span>{topic.title}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/60">
        <div className="page-shell grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-theorem-300">Navigation model</p>
            <h2 className="mt-3 text-2xl font-semibold text-chalk-100">Learn to lesson</h2>
            <p className="mt-4 text-sm leading-6 text-chalk-200/75">
              The learning route now moves from Learn to a pathway, then into a topic overview, then into a lesson shell.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {["Learn", "Pathway", "Topic", "Lesson"].map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-ink-950/70 p-4">
                <span className="font-mono text-xs text-circuit-300">0{index + 1}</span>
                <p className="mt-3 font-semibold text-chalk-100">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
