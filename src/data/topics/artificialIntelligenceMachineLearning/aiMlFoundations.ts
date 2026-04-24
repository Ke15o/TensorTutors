import type { Subtopic } from "../../../types/topic";

export const aiMlFoundationsSubtopic: Subtopic = {
  id: "ai-ml-foundations",
  title: "AI and ML Foundations",
  slug: "ai-ml-foundations",
  summary: "The basic difference between rule-based intelligence and learning from data.",
  concepts: [
    {
      id: "ai-vs-machine-learning",
      title: "AI vs Machine Learning",
      slug: "ai-vs-machine-learning",
      summary: "AI is the wider goal of intelligent behaviour; machine learning is one way to build it from data.",
      explanation: [
        "Artificial intelligence is a broad area concerned with systems that perform tasks normally associated with intelligence, such as reasoning, planning, recognising patterns, or using language.",
        "Machine learning is a subset of AI where a model improves its behaviour by learning patterns from data rather than following only hand-written rules.",
      ],
      commonMistakes: [
        "Using AI and machine learning as if they mean exactly the same thing.",
        "Assuming more data always produces a better model.",
        "Ignoring how model performance is measured on unseen data.",
      ],
    },
  ],
};
