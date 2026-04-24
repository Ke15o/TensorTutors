type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="page-shell pt-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-chalk-400">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span className="text-white/25">/</span> : null}
            {item.href ? (
              <a className="focus-ring rounded-sm text-chalk-200/80 transition hover:text-circuit-300" href={item.href}>
                {item.label}
              </a>
            ) : (
              <span className="text-chalk-100">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
