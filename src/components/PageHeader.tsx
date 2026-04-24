type PageHeaderProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export function PageHeader({ eyebrow, title, summary }: PageHeaderProps) {
  return (
    <section className="border-b border-white/10 bg-ink-900/70">
      <div className="page-shell py-14 sm:py-16">
        <p className="text-sm font-semibold uppercase text-theorem-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-chalk-100 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-chalk-200/80 sm:text-lg">{summary}</p>
      </div>
    </section>
  );
}
