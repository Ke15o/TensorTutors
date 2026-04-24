import type { ReactNode } from "react";
import { TutorialSidebar } from "./TutorialSidebar";
import type { TutorialCategory } from "../types/topic";

type TutorialLayoutProps = {
  category: TutorialCategory;
  activeTopicSlug?: string;
  children: ReactNode;
};

export function TutorialLayout({ category, activeTopicSlug, children }: TutorialLayoutProps) {
  return (
    <div className="page-shell grid gap-8 py-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <TutorialSidebar category={category} activeTopicSlug={activeTopicSlug} />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
