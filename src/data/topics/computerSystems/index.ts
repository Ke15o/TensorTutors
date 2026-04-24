import type { MajorTopic } from "../../../types/topic";
import { architectureSubtopic } from "./architecture";

export const computerSystemsTopic: MajorTopic = {
  id: "computer-systems",
  title: "Computer Systems",
  slug: "computer-systems",
  summary: "Hardware, operating systems, memory, storage, and data representation.",
  subtopics: [architectureSubtopic],
};
