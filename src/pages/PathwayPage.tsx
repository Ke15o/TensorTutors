import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHeader } from "../components/PageHeader";
import { getPathwayById, getPathwayTopics } from "../data/topics";
import type { PathwayId } from "../types/topic";

type PathwayPageProps = {
  pathwayId: PathwayId;
};

export function PathwayPage({ pathwayId }: PathwayPageProps) {
  const pathway = getPathwayById(pathwayId);
  const pathwayTopics = getPathwayTopics(pathwayId);

  if (!pathway) {
    return null;
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Learn", href: "#/learn" },
          { label: pathway.label },
        ]}
      />
      <PageHeader eyebrow="Learning pathway" title={pathway.title} summary={pathway.summary} />
      <section className="page-shell grid gap-8 py-12 lg:grid-cols-[1fr_0.42fr]">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-circuit-300">Ordered topics</p>
              <h2 className="mt-3 text-3xl font-semibold text-chalk-100">{pathway.label} sequence</h2>
            </div>
            <p className="text-sm text-chalk-400">{pathwayTopics.length} topics</p>
          </div>

          <ol className="mt-8 grid gap-4">
            {pathwayTopics.map((topic, index) => (
              <li key={topic.id}>
                <a
                  className="focus-ring group grid gap-4 rounded-lg border border-white/10 bg-ink-900/80 p-5 shadow-line transition hover:-translate-y-1 hover:border-circuit-300/40 hover:bg-ink-800 md:grid-cols-[auto_1fr_auto]"
                  href={`#/learn/${pathway.id}/${topic.id}`}
                >
                  <span className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/[0.03] font-mono text-sm text-circuit-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="text-sm font-semibold uppercase text-theorem-300">{topic.area}</span>
                    <span className="mt-2 block text-xl font-semibold text-chalk-100">{topic.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-chalk-200/75">{topic.summary}</span>
                  </span>
                  <span className="self-start rounded-md border border-white/10 px-3 py-1 text-xs uppercase text-chalk-400">
                    {topic.status}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <aside className="rounded-lg border border-white/10 bg-ink-900/70 p-5 shadow-line">
          <p className="text-sm font-semibold uppercase text-proof-300">Pathway flow</p>
          <ol className="mt-5 grid gap-3 text-sm text-chalk-200/80">
            {["Choose a pathway", "Open a topic", "Work through the lesson", "Practise and test"].map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="font-mono text-circuit-300">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </>
  );
}
