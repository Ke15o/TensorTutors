import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const sortingSubtopic: Subtopic = {
  id: "sorting",
  title: "Sorting",
  slug: "sorting",
  summary: "Rearranging values into a defined order.",
  concepts: [
    stubConcept("bubble-sort", "Bubble Sort", "Repeatedly compare neighbours and move larger values right."),
    stubConcept("merge-sort", "Merge Sort", "Divide the data, sort the parts, then merge them back together."),
  ],
};
