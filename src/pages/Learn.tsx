import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { learningAreas, topics } from "../data/topics";

export function Learn() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Structured lessons for the full Computer Science syllabus"
        summary="Each lesson will move from explanation to visualisation, practice, and a short test."
      />
      <section className="page-shell grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold text-chalk-100">Topic index</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {learningAreas.map((area) => (
              <span key={area} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-chalk-200/80">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <Card key={topic.id} eyebrow={topic.area} title={topic.title} meta={topic.status}>
              <p>{topic.summary}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
