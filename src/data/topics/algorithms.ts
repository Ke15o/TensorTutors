import type { MajorTopic } from "../../types/topic";
import { stubConcept } from "./stubConcept";

export const algorithmsTopic: MajorTopic = {
  id: "algorithms",
  title: "Algorithms",
  slug: "algorithms",
  summary: "Searching, sorting, tracing, and reasoning about algorithm efficiency.",
  subtopics: [
    {
      id: "searching",
      title: "Searching",
      slug: "searching",
      summary: "Finding values in collections using systematic procedures.",
      concepts: [
        stubConcept("linear-search", "Linear Search", "Check each item one by one until the target is found or the data ends."),
        stubConcept("binary-search", "Binary Search", "Repeatedly halve a sorted search space."),
      ],
    },
    {
      id: "sorting",
      title: "Sorting",
      slug: "sorting",
      summary: "Rearranging values into a defined order.",
      concepts: [
        stubConcept("bubble-sort", "Bubble Sort", "Repeatedly compare neighbours and move larger values right."),
        stubConcept("merge-sort", "Merge Sort", "Divide the data, sort the parts, then merge them back together."),
      ],
    },
  ],
};
