import type { Subtopic } from "../../../types/topic";

export const osFoundationsSubtopic: Subtopic = {
  id: "os-foundations",
  title: "OS Foundations",
  slug: "os-foundations",
  summary: "The role of an operating system in managing a computer.",
  concepts: [
    {
      id: "what-is-an-operating-system",
      title: "What Is an Operating System?",
      slug: "what-is-an-operating-system",
      summary: "An operating system manages hardware resources and provides services for programs.",
      explanation: [
        "An operating system sits between application software and the hardware. It manages CPU time, memory, storage, input, output, and security.",
        "Programs rely on the operating system for common services such as opening files, allocating memory, starting processes, and communicating with devices.",
      ],
      commonMistakes: [
        "Thinking the operating system is just the graphical desktop.",
        "Forgetting that many programs run at the same time and need shared resources.",
        "Confusing application software with system software.",
      ],
    },
  ],
};
