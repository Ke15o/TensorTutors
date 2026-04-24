type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  count: number;
};

export function CategoryCard({ title, description, href, count }: CategoryCardProps) {
  return (
    <a
      className="focus-ring block rounded-lg border border-white/10 bg-ink-900/80 p-5 shadow-line transition hover:-translate-y-0.5 hover:border-circuit-300/40 hover:bg-ink-800"
      href={href}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-chalk-100">{title}</h3>
        <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-chalk-400">{count}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-chalk-200/75">{description}</p>
    </a>
  );
}
