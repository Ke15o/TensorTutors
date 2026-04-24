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
    <div className="min-h-screen lg:grid lg:grid-cols-[18rem_minmax(0,1fr)]">
      <TutorialSidebar topic={topic} activeConceptId={activeConceptId} />
      <div className="min-w-0 px-5 py-10 sm:px-6 lg:mx-auto lg:w-full lg:max-w-6xl lg:py-12 lg:pl-14 lg:pr-10">
        {children}
      </div>
    </div>
  );
}
