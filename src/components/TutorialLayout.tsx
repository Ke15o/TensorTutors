import type { ReactNode } from "react";
import { TutorialSidebar } from "./TutorialSidebar";
import type { MajorTopic } from "../types/topic";

type TutorialLayoutProps = {
  topic: MajorTopic;
  activeConceptId: string;
  children: ReactNode;
};

export function TutorialLayout({ topic, activeConceptId, children }: TutorialLayoutProps) {
  return (
    <div className="page-shell grid gap-8 py-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <TutorialSidebar topic={topic} activeConceptId={activeConceptId} />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
