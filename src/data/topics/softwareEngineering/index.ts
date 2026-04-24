import type { MajorTopic } from "../../../types/topic";
import { foundationsSubtopic } from "./foundations";

export const softwareEngineeringTopic: MajorTopic = {
  id: "software-engineering",
  title: "Software Engineering",
  slug: "software-engineering",
  summary: "Designing, building, testing, and maintaining reliable software systems.",
  subtopics: [foundationsSubtopic],
};
