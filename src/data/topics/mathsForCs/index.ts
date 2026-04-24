import type { MajorTopic } from "../../../types/topic";
import { discreteMathsSubtopic } from "./discreteMaths";

export const mathsForCsTopic: MajorTopic = {
  id: "maths-for-cs",
  title: "Maths for CS",
  slug: "maths-for-cs",
  summary: "Logic, graphs, sets, functions, and notation used in Computer Science.",
  subtopics: [discreteMathsSubtopic],
};
