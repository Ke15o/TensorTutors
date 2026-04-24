import { classNames } from "../utils/classNames";
import Markdown from "./Markdown";

type InfoBoxProps = {
  title: string;
  children: string;
  variant?: "note" | "warning";
};

export function InfoBox({ title, children, variant = "note" }: InfoBoxProps) {
  return (
    <aside
      className={classNames(
        "rounded-lg border p-4 text-sm leading-6",
        variant === "warning"
          ? "border-theorem-300/[0.18] bg-theorem-300/[0.035] text-chalk-200/80"
          : "border-circuit-300/[0.18] bg-circuit-300/[0.035] text-chalk-200/80",
      )}
    >
      <p className="font-semibold text-chalk-100/90">{title}</p>

      <div className="mt-2 text-chalk-200/70">
        <Markdown>{children}</Markdown>
      </div>
    </aside>
  );
}
