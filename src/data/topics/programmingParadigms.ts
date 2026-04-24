import type { MajorTopic } from "../../types/topic";

export const programmingParadigmsTopic: MajorTopic = {
  id: "programming-paradigms",
  title: "Programming Paradigms",
  slug: "programming-paradigms",
  summary: "Imperative, object-oriented, functional, and declarative ways of structuring programs.",
  subtopics: [
    {
      id: "paradigm-foundations",
      title: "Paradigm Foundations",
      slug: "paradigm-foundations",
      summary: "How programming styles shape the way problems are expressed.",
      concepts: [
        {
          id: "what-is-a-programming-paradigm",
          title: "What Is a Programming Paradigm?",
          slug: "what-is-a-programming-paradigm",
          summary: "A programming paradigm is a style of organising code and thinking about computation.",
          explanation: [
            "A programming paradigm gives a language or program a particular way of expressing solutions. It affects how state, control flow, data, and behaviour are represented.",
            "Common paradigms include imperative programming, object-oriented programming, functional programming, and declarative programming. Many modern languages support more than one.",
          ],
          commonMistakes: [
            "Assuming a language belongs to only one paradigm.",
            "Choosing a paradigm because it is fashionable rather than because it fits the problem.",
            "Confusing syntax differences with deeper differences in program structure.",
          ],
        },
      ],
    },
  ],
};
