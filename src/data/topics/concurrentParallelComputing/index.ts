import type { MajorTopic } from "../../../types/topic";
import { concurrencyFoundationsSubtopic } from "./concurrencyFoundations";

export const concurrentParallelComputingTopic: MajorTopic = {
  id: "concurrent-parallel-computing",
  title: "Concurrent & Parallel Computing",
  slug: "concurrent-parallel-computing",
  summary: "Tasks, threads, processes, synchronisation, and using multiple operations effectively.",
  subtopics: [concurrencyFoundationsSubtopic],
};
