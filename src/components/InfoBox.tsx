import { classNames } from "../utils/classNames";

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
          ? "border-theorem-300/30 bg-theorem-300/10 text-chalk-100"
          : "border-circuit-300/30 bg-circuit-300/10 text-chalk-100",
      )}
    >
      <p className="font-semibold text-chalk-100">{title}</p>
      <p className="mt-2 text-chalk-200/80">{children}</p>
    </aside>
  );
}
