import { Breadcrumbs } from "../components/Breadcrumbs";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { getPathwayById, getTopicForPathway } from "../data/topics";
import type { PathwayId } from "../types/topic";

type LessonPageProps = {
  pathwayId: PathwayId;
  topicId: string;
};

export function LessonPage({ pathwayId, topicId }: LessonPageProps) {
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
          { label: topic.title, href: `#/learn/${pathway.id}/${topic.id}` },
          { label: "Lesson" },
        ]}
      />
      <PageHeader eyebrow={`${pathway.label} lesson`} title={`${topic.title}: lesson`} summary={topic.summary} />
      <section className="page-shell grid gap-4 py-12 lg:grid-cols-2">
        <Card eyebrow="Explain" title="Core idea">
          <p>{topic.lesson.explanation}</p>
        </Card>
        <Card eyebrow="Visualise" title="Mental model">
          <p>{topic.lesson.workedExample}</p>
        </Card>
        <Card eyebrow="Practise" title="Common mistakes">
          <ul className="grid gap-2">
            {topic.lesson.commonMistakes.map((mistake) => (
              <li key={mistake} className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-theorem-300" />
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card eyebrow="Test" title="Next steps">
          <ul className="grid gap-2">
            {topic.lesson.nextSteps.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-circuit-300" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
}
