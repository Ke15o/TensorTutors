export function NotFound() {
  return (
    <section className="page-shell py-12">
      <p className="text-sm font-semibold uppercase text-circuit-300">Not found</p>
      <h1 className="mt-3 text-4xl font-semibold text-chalk-100">This reference page does not exist yet</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-chalk-200/80">
        Return to the landing page to browse the current Computer Science topic library.
      </p>
      <a
        className="focus-ring mt-6 inline-flex rounded-md bg-circuit-300 px-4 py-3 text-sm font-semibold text-ink-950 transition hover:bg-circuit-400"
        href="/"
      >
        Back home
      </a>
    </section>
  );
}
