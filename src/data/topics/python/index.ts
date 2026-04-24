import type { MajorTopic } from "../../../types/topic";
import { basicsSubtopic } from "./basics";
import { objectOrientedProgrammingSubtopic } from "./objectOrientedProgramming";

export const pythonTopic: MajorTopic = {
  id: "python",
  title: "Python",
  slug: "python",
  summary: "Python syntax, program structure, functions, and object-oriented programming.",
  subtopics: [basicsSubtopic, objectOrientedProgrammingSubtopic],
};
