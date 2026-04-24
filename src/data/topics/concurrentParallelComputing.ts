import type { MajorTopic } from "../../types/topic";

export const concurrentParallelComputingTopic: MajorTopic = {
  id: "concurrent-parallel-computing",
  title: "Concurrent & Parallel Computing",
  slug: "concurrent-parallel-computing",
  summary: "Tasks, threads, processes, synchronisation, and using multiple operations effectively.",
  subtopics: [
    {
      id: "concurrency-foundations",
      title: "Concurrency Foundations",
      slug: "concurrency-foundations",
      summary: "The difference between managing many tasks and running tasks at the same time.",
      concepts: [
        {
          id: "concurrency-vs-parallelism",
          title: "Concurrency vs Parallelism",
          slug: "concurrency-vs-parallelism",
          summary: "Concurrency is about dealing with multiple tasks; parallelism is about executing multiple tasks simultaneously.",
          explanation: [
            "Concurrency means a system can manage more than one task by organising when each task makes progress. The tasks may take turns on a single processor.",
            "Parallelism means tasks are actually running at the same time, usually on multiple cores or processors. A program can be concurrent without being parallel, but parallel programs usually involve concurrency concerns too.",
          ],
          commonMistakes: [
            "Using concurrency and parallelism as if they mean the same thing.",
            "Ignoring shared data when multiple tasks can access it.",
            "Assuming parallel execution always makes a program faster.",
          ],
        },
      ],
    },
  ],
};
