import type { Subtopic } from "../../../types/topic";

export const foundationsSubtopic: Subtopic = {
  id: "foundations",
  title: "Foundations",
  slug: "foundations",
  summary: "Core ideas behind planning and maintaining software projects.",
  concepts: [
    {
      id: "software-development-lifecycle",
      title: "Software Development Lifecycle",
      slug: "software-development-lifecycle",
      summary: "The stages used to plan, build, test, release, and improve software.",
      explanation: [
        "Software engineering is the disciplined process of turning requirements into working software that can be tested, maintained, and improved.",
        "The software development lifecycle usually includes analysis, design, implementation, testing, deployment, and maintenance. Real projects often revisit these stages as requirements change.",
      ],
      commonMistakes: [
        "Starting implementation before the problem is understood.",
        "Treating testing as something that only happens at the end.",
        "Ignoring maintainability once the first version works.",
      ],
    },
  ],
};
