import { Breadcrumbs } from "../components/Breadcrumbs";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { getPathwayById, getTopicForPathway } from "../data/topics";
import type { PathwayId } from "../types/topic";

type TopicPageProps = {
  pathwayId: PathwayId;
  topicId: string;
};

export function TopicPage({ pathwayId, topicId }: TopicPageProps) {
  const pathway = getPathwayById(pathwayId);
  const topic = getTopicForPathway(pathwayId, topicId);

  if (!pathway || !topic) {
    return null;
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Learn", href: "#/learn" },
          { label: pathway.label, href: `#/learn/${pathway.id}` },
          { label: topic.title },
        ]}
      />
      <PageHeader eyebrow={pathway.label} title={topic.title} summary={topic.summary} />
      <section className="page-shell grid gap-8 py-12 lg:grid-cols-[0.7fr_0.3fr]">
        <div className="grid gap-4 md:grid-cols-2">
          <Card eyebrow="Objectives" title="What this topic covers">
            <ul className="grid gap-2">
              {topic.objectives.map((objective) => (
                <li key={objective} className="flex gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-circuit-300" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card eyebrow="Lesson model" title="Explain, visualise, practise, test">
            <p>
              Each topic leads into a lesson page with a short explanation, worked example, visual prompt, common
              mistakes, and next steps.
            </p>
          </Card>
          <Card eyebrow="Area" title={topic.area}>
            <p>This topic belongs to the {pathway.title} pathway and is kept in the shared topic data source.</p>
          </Card>
          <Card eyebrow="Status" title={topic.status === "ready" ? "Ready for detail" : "Planned content"}>
            <p>
              The route and lesson shell are available now. Deeper quizzes and interactive visualisers can be added
              without changing the pathway structure.
            </p>
          </Card>
        </div>

        <aside className="rounded-lg border border-white/10 bg-ink-900/70 p-5 shadow-line">
          <p className="text-sm font-semibold uppercase text-circuit-300">Next step</p>
          <h2 className="mt-3 text-2xl font-semibold text-chalk-100">Open the lesson</h2>
          <p className="mt-3 text-sm leading-6 text-chalk-200/75">
            Move from the topic overview into the lesson sequence for this topic.
          </p>
          <a
            className="focus-ring mt-5 inline-flex rounded-md bg-circuit-300 px-4 py-3 text-sm font-semibold text-ink-950 transition hover:bg-circuit-400"
            href={`#/learn/${pathway.id}/${topic.id}/lesson`}
          >
            Start lesson
          </a>
        </aside>
      </section>
    </>
  );
}
