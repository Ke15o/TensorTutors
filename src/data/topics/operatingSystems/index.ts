import type { MajorTopic } from "../../../types/topic";
import { osFoundationsSubtopic } from "./osFoundations";

export const operatingSystemsTopic: MajorTopic = {
  id: "operating-systems",
  title: "Operating Systems",
  slug: "operating-systems",
  summary: "Processes, memory management, filesystems, scheduling, and how software uses hardware.",
  subtopics: [osFoundationsSubtopic],
};
