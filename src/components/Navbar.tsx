import { useState } from "react";
import type { AppRoute, RoutePath } from "../routes";
import { classNames } from "../utils/classNames";

type NavbarProps = {
  activePath: RoutePath;
  routes: AppRoute[];
};

export function Navbar({ activePath, routes }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/90 backdrop-blur">
      <nav className="page-shell flex min-h-16 items-center justify-between gap-4" aria-label="Primary">
        <a className="focus-ring flex items-center gap-3 rounded-md" href="#/" onClick={() => setIsOpen(false)}>
          <span className="grid size-9 place-items-center rounded-md border border-circuit-300/50 bg-circuit-300/10 font-mono text-sm font-bold text-circuit-300">
            TT
          </span>
          <span className="text-base font-semibold text-chalk-100">TensorTutors</span>
        </a>

        <button
          className="focus-ring grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 sm:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={classNames("h-0.5 w-5 bg-chalk-100 transition", isOpen && "translate-y-2 rotate-45")} />
            <span className={classNames("h-0.5 w-5 bg-chalk-100 transition", isOpen && "opacity-0")} />
            <span className={classNames("h-0.5 w-5 bg-chalk-100 transition", isOpen && "-translate-y-2 -rotate-45")} />
          </span>
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              active={activePath === route.path}
              label={route.label}
              path={route.path}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink-950 sm:hidden">
          <div className="page-shell grid gap-2 py-4">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                active={activePath === route.path}
                label={route.label}
                path={route.path}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

type NavLinkProps = {
  active: boolean;
  label: string;
  path: RoutePath;
  onClick: () => void;
};

function NavLink({ active, label, path, onClick }: NavLinkProps) {
  return (
    <a
      className={classNames(
        "focus-ring rounded-md px-3 py-2 text-sm font-medium transition",
        active ? "bg-circuit-300/10 text-circuit-300" : "text-chalk-200/80 hover:bg-white/5 hover:text-chalk-100",
      )}
      href={`#${path}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
