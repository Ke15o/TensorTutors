import { PageHeader } from "../components/PageHeader";

export function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="Not found"
        title="This learning route does not exist yet"
        summary="Return to the Learn page and choose a pathway from the current topic system."
      />
      <section className="page-shell py-12">
        <a
          className="focus-ring inline-flex rounded-md bg-circuit-300 px-4 py-3 text-sm font-semibold text-ink-950 transition hover:bg-circuit-400"
          href="#/learn"
        >
          Back to Learn
        </a>
      </section>
    </>
  );
}
