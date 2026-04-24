import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const searchingSubtopic: Subtopic = {
  id: "searching",
  title: "Searching",
  slug: "searching",
  summary: "Finding values in collections using systematic procedures.",
  concepts: [
    stubConcept("linear-search", "Linear Search", "Check each item one by one until the target is found or the data ends."),
    stubConcept("binary-search", "Binary Search", "Repeatedly halve a sorted search space."),
  ],
};
