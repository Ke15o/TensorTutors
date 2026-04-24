import type { AppRoute, RoutePath } from "../routes";
import { classNames } from "../utils/classNames";

type TopNavProps = {
  activePath: RoutePath;
  routes: AppRoute[];
};

export function TopNav({ activePath, routes }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/95 backdrop-blur">
      <nav className="page-shell flex min-h-16 items-center justify-between gap-5" aria-label="Primary">
        <a className="focus-ring flex items-center gap-3 rounded-md" href="/">
          <span className="grid size-9 place-items-center rounded-md border border-circuit-300/50 bg-circuit-300/10 font-mono text-sm font-bold text-circuit-300">
            TT
          </span>
          <span className="text-base font-semibold text-chalk-100">TensorTutors</span>
        </a>

        <div className="flex items-center gap-1 overflow-x-auto">
          {routes.map((route) => (
            <a
              key={route.path}
              className={classNames(
                "focus-ring whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition",
                activePath === route.path
                  ? "bg-circuit-300/10 text-circuit-300"
                  : "text-chalk-200/75 hover:bg-white/5 hover:text-chalk-100",
              )}
              href={route.path}
            >
              {route.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
