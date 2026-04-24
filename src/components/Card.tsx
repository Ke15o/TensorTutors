import type { ReactNode } from "react";
import { classNames } from "../utils/classNames";

type CardProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  meta?: string;
  className?: string;
};

export function Card({ eyebrow, title, children, meta, className }: CardProps) {
  return (
    <article
      className={classNames(
        "group rounded-lg border border-white/10 bg-ink-900/80 p-5 shadow-line transition duration-200 hover:-translate-y-1 hover:border-circuit-300/40 hover:bg-ink-800/90",
        className,
      )}
    >
      <div className="flex min-h-8 items-start justify-between gap-4">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase text-circuit-300">{eyebrow}</span>
        ) : null}
        {meta ? <span className="text-xs text-chalk-400">{meta}</span> : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-chalk-100">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-chalk-200/80">{children}</div>
    </article>
  );
}
