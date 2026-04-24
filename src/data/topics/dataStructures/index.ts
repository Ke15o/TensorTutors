import type { MajorTopic } from "../../../types/topic";
import { linearStructuresSubtopic } from "./linearStructures";

export const dataStructuresTopic: MajorTopic = {
  id: "data-structures",
  title: "Data Structures",
  slug: "data-structures",
  summary: "Arrays, stacks, queues, linked lists, and how data organisation affects operations.",
  subtopics: [linearStructuresSubtopic],
};
