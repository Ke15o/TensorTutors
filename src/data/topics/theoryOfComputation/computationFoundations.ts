import type { Subtopic } from "../../../types/topic";

export const computationFoundationsSubtopic: Subtopic = {
  id: "computation-foundations",
  title: "Computation Foundations",
  slug: "computation-foundations",
  summary: "The abstract models used to reason about computation.",
  concepts: [
    {
      id: "what-is-computation",
      title: "What Is Computation?",
      slug: "what-is-computation",
      summary: "Computation is the systematic transformation of inputs into outputs by following rules.",
      explanation: [
        "Theory of computation studies what can be computed, how computation can be modelled, and which problems cannot be solved by any algorithm.",
        "Instead of focusing on one programming language, it uses abstract machines and formal systems to reason about computation in a precise way.",
      ],
      commonMistakes: [
        "Assuming every clearly stated problem has an algorithmic solution.",
        "Confusing practical difficulty with theoretical impossibility.",
        "Treating abstract models as irrelevant because they are not real hardware.",
      ],
    },
  ],
};
